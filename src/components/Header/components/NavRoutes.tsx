// NavRoutes.tsx
'use client';

import { useRoutes } from '@/hooks/useNavigation';
import clsx from 'clsx';
import Link from 'next/link';

const NavRoutes = () => {
    const { activeRoute, routes } = useRoutes();

    // Only render when routes are available
    if (!routes) return null;

    return (
        <ul className='hidden lg:flex gap-10 items-center col-span-2 justify-center'>
            {routes.map((route) => (
                <li
                    className={clsx('cursor-pointer h-full grid grid-rows-3', {
                        'border-b border-blue-400 text-blue-400':
                            route.isActive,
                    })}
                    key={route.id}>
                    <Link href={route.path} className='row-start-2'>
                        {route.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavRoutes;
