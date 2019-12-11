    export default{
      resizeCanvas() {
        let canvas = document.getElementById('canvas')
        if(canvas.width!=window.innerWidth*this.widthRate)
         {
          canvas.width = window.innerWidth*this.widthRate;
          canvas.height = canvas.width*0.75
         }
         if(canvas.height!=window.innerHeight*this.heightRate)
        {
          canvas.height = window.innerHeight*this.heightRate;
          canvas.width = canvas.height*4/3       
        }
        this.drawInstance.resizeCanvas()
      },
     // 获得ppt比例初始值
      setVisibleRate(){
         this.widthRate=this.pptSize.width/window.innerWidth
         this.heightRate=this.pptSize.height/window.innerHeight
         window.addEventListener("resize", debounce(this.resizeCanvas,300), true);
      },
    }
