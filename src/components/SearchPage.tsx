import { SearchBox, WebSelectBar } from ".";
import { Box } from '@mui/material'

interface SearchPageProps {}

const SearchPage: React.FC<SearchPageProps> = ({}: SearchPageProps) => {
  return (
    <Box sx={{display:'flex', flexDirection:'column',justifyContent:'center'}}>
      <SearchBox />
      <WebSelectBar/>
    </Box>
  )
};

export default SearchPage;
