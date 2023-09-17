export default function Nav() {

  return (
    <nav className="nav">
      <a href="/" className="Logo">
        LOGO
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li> 
        {/* <CustomLink href="/about">品牌故事</CustomLink>
        <CustomLink href="/products">所有商品</CustomLink>
        <CustomLink href="/gift">客製化禮物盒</CustomLink>
        <CustomLink href="/qa">常見問題</CustomLink>
        <CustomLink href="/login">登入</CustomLink>
      <CustomLink href="/shop">購物車</CustomLink> */}
        
      </ul>
    </nav>
  );
}


// function CustomLink({ href,children,...props}){
//   const path = window.location.pathname
//   return (
//       <li>
//       <a href="{herf}">{children}</a>
//     </li>
//   )
//}