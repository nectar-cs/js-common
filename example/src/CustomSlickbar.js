import React, {Fragment} from "react";
import {Layout,
  TopBarViews,
  SlickBar,
  NectarGuiUtils
}
  from "nectar-gui";


export default function CustomSlickBar(){
  return(
    <SlickBar.SlickBar>
      <Layout.Div width='100%'>
        <SlickBar.ImgItem
          spaced={false}
          isSelected={true}
          src={NectarGuiUtils.image('nectar-tomato.png')}
          SubmenuView={CustomSubMenu}
        />
        <SlickBar.ImgItem
          SubmenuView={CustomSubMenu}
          src='https://img.icons8.com/color/452/nginx.png'
        />
      </Layout.Div>
      <Layout.Div width='100%'>
        <SlickBar.ImgItem
          low={true}
          SubmenuView={CustomSubMenuTwo}
          src={NectarGuiUtils.image('nectar-tomato.png')}
        />
        <SlickBar.ImgItem
          low={true}
          SubmenuView={CustomSubMenuTwo}
          src='https://img.icons8.com/color/452/nginx.png'
        />
      </Layout.Div>

    </SlickBar.SlickBar>
  )
}

function CustomSubMenu(){
  return(
    <Fragment>
      <TopBarViews.ImgAndLink
        src='https://img.icons8.com/color/452/nginx.png'
        title={"Enter the Matrix"}
        text={"If you dare"}
      />
      <TopBarViews.ClickableRow
        icon='open_in_new'
        text='Go to settings'
        path={'/'}
      />
    </Fragment>
  )
}

function CustomSubMenuTwo(){
  return(
    <Layout.Div height='400px'>
      <TopBarViews.ImgAndLink
        src='https://assets.stickpng.com/images/58480a44cef1014c0b5e4917.png'
        title={"Kubernetes Context"}
        text="If you dare"
      />
      <TopBarViews.ClickableRow
        icon='open_in_new'
        text='Open a dialog'
        callback={_ => console.log("Talk to me!")}
      />
    </Layout.Div>
  )
}
