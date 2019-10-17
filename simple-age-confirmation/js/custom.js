
		$(document).ready(function() {
			function getCookie(name) {
                var dc = document.cookie;
                var prefix = name + "=";
                var begin = dc.indexOf("; " + prefix);
                if (begin == -1) {
                    begin = dc.indexOf(prefix);
                    if (begin != 0) return null;
                }
                else
                {
                    begin += 2;
                    var end = document.cookie.indexOf(";", begin);
                    if (end == -1) {
                        end = dc.length;
                    }
                }
                return unescape(dc.substring(begin + prefix.length, end));
            }

			function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays*24*60*60*1000));
                var 
                expires = "expires="+d.toUTCString();
                document.cookie = 
                cname + "=" + cvalue + "; " + expires;
            }

			//jika <div> dengan id="age-gate-confirm" di klik maka:
			$("#age-gate-confirm").click(function(){
			    var name = 'oke'; // set nama cookie
				var value = '1'; // set isi cookie
				var days = 1; // set jumlah haris cookie tersimpan pada browser user

                //setting cookie melalui fungsi setCookie di atas
				setCookie(name, value, days);
                //hilangkan class age-gate-body pada class="age-gate"
			    $(".age-gate").removeClass("age-gate-body");
                //perlihatkan header
			    $("header.header_in.is_fixed").show();
                //hapus class hidden-overflow pada html <body>
			    $("body").removeClass("hidden-overflow" );
                //jangan perlihatkan <div> dengan id="age-gate"
			    $("#age-gate").hide();
			});

			var oneCookie = getCookie('oke');

            //jika tidak ada cookie maka:
			if(oneCookie == null || oneCookie == ""){
              //tambahkan class age-gate-body pada class="age-gate"
			  $(".age-gate").addClass("age-gate-body");
              //jangan perlihatkan header
			  $("header.header_in.is_fixed").hide();
              //tambahkan class hidden-overflow pada html <body>
			  $("body").addClass("hidden-overflow" );

            //jika ada value pada cookie dengan nama oke, maka:
			}else{
              //hilangkan class age-gate-body pada class="age-gate"
			  $(".age-gate").removeClass("age-gate-body");	
			}
		} );	