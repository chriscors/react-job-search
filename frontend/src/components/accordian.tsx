


interface SidebarProps {
  activeCategory: string | null
  setActiveCategory: React.Dispatch<React.SetStateAction<null | string>>
}
const Sidebar: FC<SidebarProps> = ({activeCategory, setActiveCategory}) => {
  
  return (
    <Box sx={{ height: '100vh', maxWidth: 200, overflowWrap: 'break-word', bgcolor: 'background.paper', boxShadow: 1}}>
      <nav aria-label='main sidebar'>
        <List>
          <MenuItem text = "React" icon = {faReact} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          <MenuItem text="Python/Django" icon={faPython} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          <MenuItem text="Node.js" icon={faNode} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
          <MenuItem text="Ruby/Rails" icon={faGem} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </List>
      </nav>

    </Box>
  )

}