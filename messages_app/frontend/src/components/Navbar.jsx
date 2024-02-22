import { Link } from 'wouter'
import { routes as menuEntries } from '../Routes'

export function Navbar () {
    
    const menu = menuEntries.map((entry, index) => {
        const menuItem = <Link key={index} href={entry.href}>{entry.label}</Link>
        const separator = index < menuEntries.length - 1 ? <span>|</span> : ''
        return <>{ menuItem } { separator }</>
    })

    return (
        <nav className='w-screen p-4 fixed bg-neutral-900 top-0 inline-flex justify-center items-baseline gap-4 text-lg'>
            <span className='me-12 text-2xl font-bold'>Message App</span>
            { menu }
        </nav>
    )
}