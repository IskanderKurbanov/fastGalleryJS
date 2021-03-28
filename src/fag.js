/*
`<article class="FAG_item">
	<a href="${el.src}" class="FAG_link">
		<aside style="background:url(${el.src});" class="FAG_aside">
			<!--<img src="${el.src}" class="FAG_img">-->
			<p>${el.text}</p>
		</aside>
	</a>
</article>`
*/


const tagCss = 'max-width: 1200px;margin:30px auto;'
const descriptionTag = 'p'

class Fag {

	constructor(options) {
		//options:{tag, headlines, path, data}

		this.headlines = options.headlines // for gallery's headlines
		this.path = options.path // for css and img files where library is located

		if(this.path) document.write(`<link rel='stylesheet' href='${this.path}files/FAG_style.css' type='text/css'>`);
		else document.write(`<link rel='stylesheet' href='FAG_style.css' type='text/css'>`);

		if(options.data) {
			this.data = options.data  // for json data
		} 
		else console.log('not data')

		if(options.tag){
			this.tag = document.querySelector(options.tag) // html tag where gallery is located
			this.tag.style.cssText = tagCss
			this.renderGallery()
		}

		//this.tag.style.height = (1200/3)*Math.ceil(this.data.length/3) + "px"
	}


	renderGallery() {

		let f = this.data.map((el,index)=>{


			let img, descTag, aside, item

			el.src?img=el.src:this.path?img=`${this.path}files/file.svg`:img="files/file.svg"
			el.text?descTag=`<${descriptionTag}>${el.text}</${descriptionTag}>`:" "
			aside = `<aside style="background-image:url(${img})">${descTag}</aside>`

			el.link?item=`<article><a href="${el.link}">${aside}</a></article>`:item=`<article>${aside}</article>`

			if(!((index)%3!=0)) item = '<div class="FAG_row">' + item
			if(!((index+1)%3!=0) || this.data.length-1 == index) item = item + '</div>'

			console.log(item)

			if(this.headlines){
				if(el.visible && this.headlines.indexOf(el.title) != -1){
					return item
				}
			}
			else {
				if(el.visible){
					return item
				}
			}
		})
		
		if(this.headlines) {
			let m = this.headlines.map((el, index)=>{return `<p>${el}</p>`})
			this.tag.innerHTML = '<nav class="FAG_nav">'+m.join('')+'</nav>' + f.join('')

			let navigation = this.tag.querySelector("nav")
			navigation.querySelectorAll("p").forEach(el=>el.className = 'FAG_nav_p')
		}
		else this.tag.innerHTML = f.join('')

		let objs = this.tag.querySelectorAll("article")
		objs.forEach((obj, index)=>{
			if((index+1)%3!=0) obj.className = "FAG_item"
			else obj.className = "FAG_item_th"
			obj.querySelector("a")?obj.querySelector("a").className = 'FAG_link':''
			obj.querySelector("aside").className = 'FAG_aside'
			obj.querySelector(descriptionTag).className = 'FAG_p'
		}) 
	}
}