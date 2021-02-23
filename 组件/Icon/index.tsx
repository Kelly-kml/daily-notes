/*
 * @Author: kelly
 * @Date: 2021-02-23 11:47:56
 * @Description: 自定义图标，兼容原有antd图标
 * @LastEditors: kelly
 * @LastEditTime: 2021-02-23 14:14:32
 */
import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { BASE_PATH } from '@/config';

const isProd = process.env.NODE_ENV === 'production';
const url = isProd ? `${BASE_PATH}/iconfont.js` : `/iconfont.js`;

const CustomIcon = createFromIconfontCN({
    scriptUrl: url,
});

const IconFont = props => {
    const { type, className = '' } = props;
    if (!type) {
        return null;
    }
    return type.startSwitch('icon-')
        ? <CustomIcon {...props} />
        : (
            <span>
                <svg
                    {...props}
                    className="icon"
                    aria-hidden="true">
                    <use xlinkHref={`#${type}`} />
                </svg>
            </span>
        );
};
export default IconFont;

