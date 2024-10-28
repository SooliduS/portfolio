import { navigationRoutes } from '@/data/navigationRoutes';
import { usePathname } from 'next/navigation';

export function useRoutes() {
    const pathname = usePathname(); // Get the current route

    // Find the active route based on the current pathname
    const activeRoute = navigationRoutes.find(
        (route) => route.path === pathname
    );

    const routes = navigationRoutes.map((route) => {
        return { ...route, isActive: activeRoute === route };
    });

    return { routes, activeRoute };
}
