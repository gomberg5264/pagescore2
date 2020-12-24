import classNames from 'classnames';
import React from 'react';

import { AccountObj } from './avatar';
import styles from './styles.module.scss';

type DefaultAvatarProps = {
  account?: AccountObj;
  size: number;
  imageSize?: number;
  fontSize?: number;
  className?: string;
  imgClassName?: string;
  // hideTooltip?: boolean;
};

export function DefaultAvatar(props: DefaultAvatarProps) {
  const {
    // account = {},
    size,
    className,
    // imgClassName,
    // hideTooltip = false,
  } = props;
  // const { profileImage = '', name = '', displayName = '' } = account;
  return (
    <div
      className={classNames(styles.default, styles.avatar, className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size * 0.35}px`,
        lineHeight: `${size}px`,
      }}
    >
      ?
    </div>
  );
}
