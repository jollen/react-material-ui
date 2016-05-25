/*
 * 引入 React 程式庫
 */
import React from 'react';
import { render } from 'react-dom';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

/*
 * 目前 React 不支援 touch / tap 事件，因此使用 React Material UI
 * 時要加入這個插件。
 *
 * See: http://www.material-ui.com/#/get-started/installation
 */
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const MyAppBar = () => (
    <AppBar 
    	iconElementRight={
    		<IconMenu
				iconButtonElement={
				    <IconButton><MoreVertIcon /></IconButton>
				}
    		>
    			<MenuItem primaryText="Help" />
    		</IconMenu>  
    	}
    	title="App" />
);

export default MyAppBar