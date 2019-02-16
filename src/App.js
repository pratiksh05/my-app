import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';
import { Tooltip } from '@progress/kendo-react-tooltip';

class MenuNavContainer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: "grey"}}>
                <Menu onSelect={this.onSelect}>
                    <MenuItem text="Home" data={{ route: '/' }} />
                    <MenuItem text="Products" data={{ route: '/#' }} />
                    <MenuItem text="About" data={{ route: '/#' }}>
                        <MenuItem text="Team" data={{ route: '/#' }} />
                    </MenuItem>
                </Menu>
                <div >{this.props.children}</div>
            </div>
        );
    }

    // onSelect = (event) => {
    //     this.props.history.push(event.item.data.route);
    // }
}

export default (MenuNavContainer);
