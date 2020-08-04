import {useAutocomplete} from "@material-ui/lab";
import {Container, InputWrapper, ListBox, Tag} from "./TagPoolStyles";
import React, {Fragment} from "react";

export default function TagPool(props: Props){
  const { optionsHash, defaultsArray } = props;
  const humanizer = (key) => optionsHash[key];

  const {
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    defaultValue: defaultsArray,
    options: Object.keys(optionsHash),
    onChange: (_, v) => props.callback(v),
    getOptionLabel: humanizer,
    multiple: true
  });

  return(
    <Container>
      <Fragment>
        <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
          {value.map((option, index) => (
            <Tag label={humanizer(option)} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </Fragment>
      { groupedOptions.length > 0 && (
        <ListBox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{humanizer(option)}</span>
            </li>
          ))}
        </ListBox>
      )}
    </Container>
  )
}

type Props = {
  callback: any => any,
  optionsHash: {string: string},
  defaultsArray: Array<any>,
};
