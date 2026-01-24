import React from 'react';
import Container from '@/components/ui/Container';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    return (
        <section id={id} className={`py-20 md:py-28 relative ${className}`}>
            <Container className="relative z-10">
                {children}
            </Container>
        </section>
    );
}
