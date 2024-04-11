## Snow lifecycle 

1.   x call Snow() --> start point ( setTop( top > 90 ) ) "top = 100" 
     |
     |
2.   x -  top    = 0
     |    flakes = [ <Flake *-top={100}-* size={50} color={"#fff"} /> ]
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
10.                                setFlakes([]); /* will work !
                                             we said to React to reRending the component with setModification([]) 
                                             so we canceled the component from DOM tree */
                                                          
                                        
                       