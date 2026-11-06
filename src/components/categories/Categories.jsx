import { Alert, Box, Chip, CircularProgress , Typography} from '@mui/material';
import useCategories from '../../hooks/useCategories';
import CategoryItem from './CategoryItem';
export default function Categories() {
 
  const{data ,isPending , isError, error} = useCategories();

  if(isPending) return <CircularProgress/>
  if(isError) return <Alert severity='error'>Failed to load categories</Alert>
  return (
    <>
    <Box sx={{mb:4}}>
        <Typography variant = 'h2' component = {'h2'}>Categories</Typography>
        <Box sx = {{display:'grid' , gridTemplateColumns:{
            xs: "repeat(2,1fr)",
            sm:"repeat(3,1fr)",
            md:"repeat(4,1fr)",
           } , gap: 1,
          }}>
            {data.map((category)=> 
            <CategoryItem category = {category} clickable/>
            )}

        </Box>
        
    </Box>
    </>
    
  )
}
