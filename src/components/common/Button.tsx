// import React from 'react';
// import { motion, HTMLMotionProps } from 'framer-motion';

// interface ButtonProps
//   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDrag'>,
//     HTMLMotionProps<'button'> {
//   variant?: 'primary' | 'secondary' | 'outline';
//   size?: 'sm' | 'md' | 'lg';
// }

// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = 'primary',
//   size = 'md',
//   className = '',
//   ...props
// }) => {
//   const baseStyles = `rounded-full font-medium transition-all duration-300 flex items-center justify-center`;

//   const variants: Record<'primary' | 'secondary' | 'outline', string> = {
//     primary: 'bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 glow-effect',
//     secondary: 'bg-white text-blue-600 hover:bg-blue-50',
//     outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
//   };

//   const sizes: Record<'sm' | 'md' | 'lg', string> = {
//     sm: 'px-4 py-2 text-sm',
//     md: 'px-6 py-3 text-base',
//     lg: 'px-8 py-4 text-lg',
//   };

//   return (
//     <motion.button
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// };
