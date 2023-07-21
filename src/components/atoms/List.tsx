import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

type Props = {
  icon?: React.ReactNode;
  name?: string;
  href?: string;
  isTabDisabled?: boolean;
  selectedIndex: number;
};

const StyledListItem = styled(ListItem)({
  // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: '#1F2A3C',
  },
});

const CustomList = ({
  icon,
  name,
  href,
  isTabDisabled,
  selectedIndex,
}: Props) => {
  return (
    <>
      {name !== 'divider' ? (
        <StyledListItem
          disablePadding
          disableGutters
          sx={{ border: 'none', backgroundColor: '#1F2A3C' }}
        >
          <ListItemButton
            selected={selectedIndex === 0}
            component="a"
            href={href}
            alignItems="center"
            sx={{ backgroundColor: '#1F2A3C' }}
            disabled={isTabDisabled}
            /* disabled={isTabDisabled} */
          >
            <ListItemIcon sx={{ color: `#D4D7DD` }}>{icon}</ListItemIcon>
            <ListItemText sx={{ color: '#D4D7DD' }} primary={name} />
          </ListItemButton>
        </StyledListItem>
      ) : (
        <Divider sx={{ bgcolor: '#394B61' }} />
      )}
    </>
  );
};

export default CustomList;
