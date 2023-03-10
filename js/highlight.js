AFRAME.registerComponent('cursor-listener',{

    schema:{
        selected_item_id:{default:"",type:"string"}
    },


    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handlePlacesListState:function(){
        const id=this.el.getAttribute("id");
        const places_id=["avengers","superman","spiderman","calvin"];

        if(places_id.includes(id)){
            const placesContainer=document.querySelector("#places-container");
            placesContainer.setAttribute("cursor-listener",{
                selected_item_id:id,
            });
            this.el.setAttribute("material",{
                color:"red",
                opacity:1
            })

        }
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },

    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selected_item_id}=this.data;
            if(selected_item_id){
                const el=document.querySelector(`#${selected_item_id}`);
                const id=el.getAttribute("id")
                if(id==selected_item_id){
                    el.setAttribute("material",{color:"yellow",opacity:1})
                }
            }
        })
    }
})