import { Box, Divider, List } from '@mui/material';
import { NAV_LINKS } from '../../utils/constants';
import CustomList from '../atoms/List';

import { styled } from '@mui/material/styles';

const StyledList = styled(List)({
  // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: '',
    '&, & .MuiListItemIcon-root': {
      color: '#00E0FF',
    },
  },
  // hover states
  '& .MuiButtonBase-root ': {
    // backgroundColor: '#1F2A3C',
    '& .MuiListItemButton-root': {
      //   backgroundColor: '#1F2A3C',
      '& .Mui-selected': {
        backgroundColor: '#1F2A3C',
      },
    },
  },
});

const DisplayList = () => {
  return (
    <Box>
      <StyledList>
        {NAV_LINKS.map((item, id) => (
          <CustomList
            key={`${item.name}${id}`}
            selectedIndex={0}
            icon={item.icon}
            name={item.name}
            href={item.href}
            isTabDisabled={item.isTabDisabled}
          />
        ))}
      </StyledList>

      <Divider sx={{ bgcolor: '#394B61' }} />
    </Box>
  );
};

export default DisplayList;
