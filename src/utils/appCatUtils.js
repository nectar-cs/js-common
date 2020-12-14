export default class AppListingUtils{
  static rbac2simplified(policyRoot){
    const output = {};
    for(let [ns, rules] of Object.entries(policyRoot)) {
      output[ns] = {};
      for (let rule of rules) {
        for (let resource of rule.resources) {
          const existing = output[ns][resource] || [];
          const updatedSet = new Set([...existing, ...rule.verbs]);
          const isWildcard = updatedSet.has('*');
          output[ns][resource] = isWildcard ? ['*'] : Array.from(updatedSet);
        }
      }
    }
    return output;
  }
}
