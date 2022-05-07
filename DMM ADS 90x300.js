Banner = new Array(3);

Banner[0] = "<a href='https://games.dmm.com/en/detail/aigisc/'title='Millennium War Aigis'><img src='https://p.dmm.com/p/general/netgame/top/head2/pickup_177037_220217_hvnDfs.jpg' border='0'  height='90px' width='300px'></a>";
Banner[1] = "<a href='https://games.dmm.com/en/detail/angelic/'title='Angelic link'><img src='https://p.dmm.com/p/general/netgame/top/head2/pickup_693982_220217_MWrTMg.jpg' border='0'  height='90px' width='300px'></a>";
Banner[2] = "<a href='https://dmg.priconne-redive.jp/'title='Princess Connect! Re:Dive'><img src='https://p.dmm.com/p/general/netgame/top/head2/pickup_priconner_220217_OHFQtv.jpg' border='0'  height='90px' width='300px'></a>";
Banner[3] = "<a href='https://games.dmm.com/en/detail/oshirore/'title='Shiro Project: RE ~ CASTLE DEFENSE ~'><img src='https://p.dmm.com/p/general/netgame/top/head2/pickup_777106_220215_vHcHGt.jpg' border='0'  height='90px' width='300px'></a>";

index = Math.floor(Math.random() * Banner.length);
document.write(Banner[index]);