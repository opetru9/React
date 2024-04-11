## Snow lifecycle 

1.   x call Snow() --> start point ( setTop( top > 90 ) ) "top = 100" 
     |
     |
2.   x - flakes = [ <Flake *-top={100}-* size={50} color={"#fff"} /> ]
     |
     |
     |
3.   x - render flakes
     |
4.   v returns of Snow() 
5.   * -  useEffect(() => { ... })  
                        |
6.                    seTimeout(()=>{ ... }, 500) 
                                     |       |
                                     |       |
7.                                delay 500ms <-
                                  |
                                  |
8.                            if (top < 90) === false 
                                        |
9.                                     else 
                                        |
                                        v
10.                                flake.pop() /* won't work without "set" 
                                            after the last set-Modification  (top = 100),
                                            React does the last timeout where "if" condition doesn't work,
                                            then executes .pop() and stop any reRendering. 
                                                # the .pop() was done after the last Rendering so we can't see any changes on window */ 
                                                          
                                        
                       