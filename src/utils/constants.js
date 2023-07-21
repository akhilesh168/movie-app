import {
  List,
  Logout,
  Movie,
  PlaylistAdd,
  Recommend,
  Search,
  Settings,
  Tv,
  WatchLater,
} from '@mui/icons-material';

export const NAV_LINKS = [
  {
    name: 'Discover',
    icon: <Search />,
    href: '/discover',
    isTabDisabled: false,
  },
  {
    name: 'Playlist',
    icon: <PlaylistAdd />,
    href: '/playlist',
    isTabDisabled: true,
  },
  { name: 'Movie', icon: <Movie />, href: '/movie', isTabDisabled: true },
  { name: 'TvShows', icon: <Tv />, href: '/tvShows', isTabDisabled: true },
  { name: 'My List', icon: <List />, href: '/myList', isTabDisabled: true },
  { name: 'divider' },
  {
    name: 'Watch Later',
    icon: <WatchLater />,
    href: '/watchLater',
    isTabDisabled: true,
  },
  {
    name: 'Recommended',
    icon: <Recommend />,
    href: '/recommended',
    isTabDisabled: true,
  },
  { name: 'divider' },
  {
    name: 'Settings',
    icon: <Settings />,
    href: '/settings',
    isTabDisabled: true,
  },
  { name: 'Logout', icon: <Logout />, href: 'logout', isTabDisabled: true },
];
