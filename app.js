Vue.createApp({
    data() {
        return {
            activeDisplay:"show",
            content:'content',
            datas:[{"name":"hossein","fullName":"ajerloo","email":"ahosseinajerloogmail.com"},{"name":"hesam","fullName":"ajerloo","email":"hesamajerlo.com"}],
            data:{"phone":'',"fullName":"","email":""},
            search:""
        }
    },
    methods: {
        changeStatus(display){
           
             this.activeDisplay=display
        },
        submit(event){
            event.preventDefault();
            this.datas.push(this.data);
            this.activeDisplay="show";
            this.data={};
            toastr.success('مخاطبین اضافه شد')
        },
        remove(emailSearch)
        {
           this.datas=this.datas.filter(item=>item.email!==emailSearch);
            this.activeDisplay="show"
        }
    },
    computed:{
        changedata()
        {
            return this.datas.filter(item=>item.fullName.includes(this.search))
        }
    }
}).mount("#app")