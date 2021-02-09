import React from 'react'
import AntdPopover from 'antd/lib/popover'
import 'antd/lib/popover/style/css'
import './index.css'

const Popover = ({ children, content, visible }) => (
    <AntdPopover content={ content } visible={ visible }>
        { children }
    </AntdPopover>
)

export default Popover
