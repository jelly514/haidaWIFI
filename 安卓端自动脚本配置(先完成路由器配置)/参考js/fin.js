var res = http.get("4.4.4.4");
const w1 = JSON.stringify(res.url)
importClass(java.util.regex.Matcher);
importClass(java.util.regex.Pattern);
regex = "d10.+\\d";
regex2 = "10.+";

function reg() {
	 
    url = Pattern.compile(regex);
            urlAddress = w1;
            matcher = url.matcher(urlAddress);
            while (matcher.find()) {
                
                url1 = matcher.group();
				matcher = matcher.reset();
                return url1;
            }
            return null;
        }
		
        toast(reg());


function reg2() {
	 
    url2 = Pattern.compile(regex2);
            url2Address = middle1;
          matcher = url2.matcher(url2Address);
            while (matcher.find()) {
                
                url2 = matcher.group();
                return url2;
            }
            return null;
        }
        


var middle1 = reg();
toast(reg2());
        
launchApp("设置");
sleep(500);
click(550,780);
sleep(700);
click(1000,1000);
sleep(1000)
row("6").findOne().click();
sleep(500);
click(960,390)
sleep(100);
click(960,390)
sleep(100);
bounds(210,738,1026,828).setText(reg2());
bounds(210,738,1026,828).click();
sleep(100);
bounds(900,120,1050,264).click()
sleep(100)
home();