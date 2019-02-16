import React from 'react';


class gridView extends React.Component {
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

export default (gridView);
