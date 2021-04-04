/*
`<article class="FAG_item">
	<a href="${el.img}" class="FAG_link">
		<aside style="background:url(${el.img});" class="FAG_aside">
			<!--<img img="${el.img}" class="FAG_img">-->
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

		if(options.data) {
			this.data = options.data  // for json data
		}
		else console.log('not data')

		if(options.defaultKey){
			this.data.forEach(el=>{	
				if(options.defaultKey.title) {
					Object.defineProperty(el, 'title',  Object.getOwnPropertyDescriptor(el, options.defaultKey.title));
					delete el[options.defaultKey.title];
				}
				if(options.defaultKey.text) {
					Object.defineProperty(el, 'text',  Object.getOwnPropertyDescriptor(el, options.defaultKey.text));
					delete el[options.defaultKey.text];
				}
				if(options.defaultKey.mobileText) {
					Object.defineProperty(el, 'mobileText',  Object.getOwnPropertyDescriptor(el, options.defaultKey.mobileText));
					delete el[options.defaultKey.mobileText];
				}
				if(options.defaultKey.img) {
					Object.defineProperty(el, 'img',  Object.getOwnPropertyDescriptor(el, options.defaultKey.img));
					delete el[options.defaultKey.img];
				}
				if(options.defaultKey.link) {
					Object.defineProperty(el, 'link',  Object.getOwnPropertyDescriptor(el, options.defaultKey.link));
					delete el[options.defaultKey.link];
				}		
			})
		}

		if(options.tag){
			this.tag = document.querySelector(options.tag) // html tag where gallery is located
			this.tag.style.cssText = tagCss
			this.renderGallery()
		}
	}


	renderGallery() {

		let f = this.data.map((el,index)=>{


			let img, descTag, mobDescTag, aside, item

			if(el.img) img=el.img

			el.text ? descTag=`<${descriptionTag}>${el.text}</${descriptionTag}>` : descTag=`<${descriptionTag}> ${index+1} </${descriptionTag}>`
			el.mobileText ? mobDescTag=`<span class="FAG_mobileP">${el.mobileText}</span>`: mobDescTag=`<span class="FAG_mobileP"></span>`

			aside = `<aside style="background-image:url(${img})">${descTag}${mobDescTag}</aside>`

			el.link?item = `<article><a href="${el.link}">${aside}</a></article>` : item=`<article>${aside}</article>`

			if(!((index)%3!=0)) item = '<div class="FAG_row">' + item
			if(!((index+1)%3!=0) || this.data.length-1 == index) item = item + '</div>'

			if(this.headlines){
				if(this.headlines.indexOf(el.title) != -1){
					return item
				}
			}
			else {return item}
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
