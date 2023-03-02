const Social = () => {
  const socialContent = [
    { id: 1, liveLink: "https://www.facebook.com/Patagonia.tourism?mibextid=ZbWKwl", icon: " fa fa-facebook" },
    // { id: 2, liveLink: "https://www.twitter.com/", icon: "fa-twitter" },
    { id: 3, liveLink: "https://www.instagram.com/patagonia_tourism_industries?igshid=ZDdkNTZiNTM=", icon: "fa fa-instagram" },
    { id: 4, liveLink: "https://t.me/+XN7GOjUDRkdjMjEO", icon: "fa fa-telegram" },
    
    { id: 6, liveLink: "https://wa.me//905385073947", icon: "fa fa-whatsapp" },
    { id: 7, liveLink: "https://chat.whatsapp.com/EfjRs1GVLUO6TJjgq3Rdlr", icon: "fa-solid fa-people-line"  , isGroup: true },
    
    
  ];
  return (
    <>
      {socialContent.map((item) => (
        <li className="list-inline-item" key={item.id}>
          <a
          className=" flex  flex-column items-center "
          href={item.liveLink} target="_blank" rel="noopener noreferrer">
        {item?.icon !== '' &&     <i className={item.icon}></i>}
            {/* {item?.isGroup === true && <span className=" text-sm">Group Chat</span>} */}
          </a>
        </li>
      ))}
    </>
  );
};

export default Social;
