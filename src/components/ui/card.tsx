import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  href,
  external,
  hover = true,
  ...props
}) => {
  const classes = cn(
    "rounded-xl border border-gray-100 bg-white overflow-hidden transition-all duration-300",
    hover && "hover:border-brand hover:shadow-lg hover:-translate-y-1",
    className
  );

  if (href) {
    const anchorProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export interface CardImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
}

export const CardImage: React.FC<CardImageProps> = ({ src, alt, className, ...props }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={400}
      className={cn("w-full h-48 object-cover", className)}
      {...props}
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  );
};

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};
