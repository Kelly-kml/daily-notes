/*
 * @Author: kelly
 * @Date: 2021-02-23 10:41:32
 * @Description: 头部固定组件
 * @LastEditors: kelly
 * @LastEditTime: 2021-02-23 11:22:57
 */

import React, { ReactNode, useMemo } from 'react';
import { Affix, Tooltip } from 'antd';
import { AffixProps } from 'antd/es/affix';
import classNames from 'classnames';
import Icon from '@/components/Icon';

export interface AffixHeaderProps extends AffixProps {
  titleText?: string;
  rightContent?: ReactNode;
  leftContent?: ReactNode;
  showBackIcon?: boolean; 
  onBack?: () => void;
}

const AffixHeader: React.FC<AffixHeaderProps> = ({
  children,
  titleText,
  rightContent,
  onBack,
  showBackIcon = true,
  className,
  leftContent,
  ...rests
}): React.ReactElement => {
  // class名扩展
  const classes = useMemo(() => classNames('cmp-affix-header', className), [className]);

  return (
    <Affix
      {...rests}
      className={classes}
    >
      <div>
        {
          titleText
          &&
          (
            <div className="affix-title">
              <div className="affix-title-left">
                {
                  showBackIcon && (
                    <Tooltip
                      placement="top"
                      title="返回"
                    >
                      <span className="back-icon">
                        <Icon
                          type="cdd_fanhuicelakuang"
                          onClick={onBack}
                        />
                      </span>
                    </Tooltip>
                  )
                }
                {titleText}
                {leftContent}
              </div>
              {rightContent}
            </div>
          )
        }
        {children}
      </div>
    </Affix>
  );
};

export default AffixHeader;
