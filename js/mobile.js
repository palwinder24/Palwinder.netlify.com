

                   var homepage= document.getElementById("homepage");
                   var userpage= document.getElementById("userpage");
                   var blogpage=document.getElementById("blogpage");
                   var resumepage=document.getElementById("resumepage");
                   var heading_text=document.getElementById("heading_text");
                    
                   function loadhome(){
         userpage.style.visibility="hidden";
          blogpage.style.visibility="hidden";
          resumepage.style.visibility="hidden";
          homepage.style.visibility="visible";
          heading_text.innerHTML="Home";
             }
                   
      function loadblog(){
        homepage.style.visibility= "hidden";
        userpage.style.visibility="hidden";
             resumepage.style.visibility="hidden";
             blogpage.style.visibility="visible";
             heading_text.innerHTML="Blog";
                       }
      
                       function loadresume(){
                        homepage.style.visibility= "hidden";
                        userpage.style.visibility="hidden";
                        blogpage.style.visibility="hidden";
                        resumepage.style.visibility="visible";
                        heading_text.innerHTML="Resume";
                              
                                      }
                                      function loaduser(){
                                        homepage.style.visibility= "hidden";
                                        blogpage.style.visibility="hidden";
                                        resumepage.style.visibility="hidden";
                                        userpage.style.visibility="visible";
                                        heading_text.innerHTML="User";
                                                      }

                                                      // When the user scrolls down 50px from the top of the document, resize the header's font size

                                                      window.onscroll = function() {scrollFunction()};
                                                     var heading=document.getElementById("heading_text").style;
                                                     var hr=document.getElementsByClassName("hr").style;
                                                      function scrollFunction() {
                                                        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
                                                           
                                                            heading.fontSize="25px";
                                                            heading.background="white";
                                                            heading.color="blue";
                                                           heading.alignItems="center";
                                                           heading.textAlign="center";
                                                           heading.padding="2%";
                                                           hr.display="none";

                                                            
                                                        } else {
                                                            
                                                          heading.textAlign="left";
                                                          heading.paddingLeft="30px";
                                                          heading.paddingTop="30px";
                                                          heading.fontSize="37px";
                                                          heading.background="white";
                                                         
                                                            
                                                        }
                                                      }