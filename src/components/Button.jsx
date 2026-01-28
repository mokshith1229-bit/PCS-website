import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    href,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-danger-600 text-white hover:bg-danger-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-danger-500',
        secondary: 'bg-accent-600 text-white hover:bg-accent-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-accent-400',
        danger: 'bg-danger-600 text-white hover:bg-danger-700 hover:shadow-lg hover:-translate-y-0.5 focus:ring-danger-400',
        outline: 'border-2 border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white hover:shadow-lg focus:ring-danger-500',
        white: 'bg-white text-danger-600 hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 focus:ring-danger-500',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;
