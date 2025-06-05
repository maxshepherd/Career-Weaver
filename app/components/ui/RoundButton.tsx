'use client';
import styles from './button.module.css';

import { useRouter } from 'next/navigation';

interface RoundButtonProps {
  variant: 'back' | 'edit' | 'scrollTop';
  onClick?: () => void;
}

export default function RoundButton({ variant, onClick }: RoundButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (variant === 'back') {
      router.back();
    } else if (variant === 'scrollTop') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'back':
        return '←';
      case 'edit':
        return '✎';
      case 'scrollTop':
        return '↑';
      default:
        return '';
    }
  };

  return (
    <button className={`${styles['round-button']} ${styles[`round-button--${variant}`]}`} onClick={handleClick}>
      {getIcon()}
    </button>
  );
}
