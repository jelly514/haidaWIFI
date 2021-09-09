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
//从这里开始写你自己的脚本