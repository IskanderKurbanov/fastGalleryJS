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
		this.width = document.body.clientWidth
		this.headlines = options.headlines // for gallery's headlines
		this.tools = options.tools
		if(options.data) {
			this.data = options.data  // for json data
		}
		else console.log('not data')
		if(options.tag){
			this.tag = document.querySelector(options.tag) // html tag where gallery is located
			if(this.tools){
				this.renderTools(this.tools)
				document.querySelector('.FAG_tools').querySelectorAll('aside').forEach(el=>{
					el.addEventListener("click", ()=>this.postRender(el.getAttribute('data')))
					//el.addEventListener("touchend", ()=>this.postRender(el.getAttribute('data')))
				})
			}
			options.tagStyle==undefined||options.tagStyle==''?this.tag.style.cssText = tagCss : this.tag.style.cssText = options.tagStyle
			this.renderGallery(this.width)
		}
		
	}


	postRender(format){
		let objsRows
		let FAG_data = this.tag.querySelector('.FAG_data')
		format=='_list'? objsRows = this.tag.querySelectorAll(".FAG_row"): objsRows = this.tag.querySelectorAll(".FAG_row_list")
		FAG_data.querySelectorAll("article").forEach((obj, index)=>{
			((index+1)%3!=0)?obj.className = "FAG_item"+format:obj.className = "FAG_item_th"+format
			obj.querySelector("a")?obj.querySelector("a").className = 'FAG_link':''
			obj.querySelector("aside").className = 'FAG_aside'+format
			obj.querySelector(descriptionTag).className = 'FAG_p'
		})
		objsRows.forEach((obj)=> obj.className="FAG_row"+format )
		if(this.tools){ 
			document.querySelector('.FAG_tools').querySelectorAll('aside').forEach(el=>{
				//(el.getAttribute('data') == format)? el.className='FAG_active':el.className=''
			})
		}
	}


	renderTools(tools) {
		let view, statistic
		tools.view?view = '<article class="FAG_viewTools"><aside data="" class="FAG_viewTools_row"></aside><aside data="_list" class="FAG_viewTools_list"></aside></article>':view = ''
		tools.statistic?statistic = '<article class="FAG_statisticTools">statistic: cooming soon</article>':statistic = ''
		const tools_block = document.createElement('div')
		this.tag.append(tools_block)
		tools_block.innerHTML = `<div class="FAG_tools">${statistic} ${view}</div>`
	}


	renderHeadlines(f, format) {
		if(this.headlines) {
			let m = this.headlines.map((el, index)=>{return `<p>${el}</p>`})
			this.tag.innerHTML = '<nav class="FAG_nav">'+m.join('')+'</nav>' + f.join('')

			let navigation = this.tag.querySelector("nav")
			navigation.querySelectorAll("p").forEach(el=>el.className = 'FAG_nav_p')
		}
		return f.join('')
	}


	renderGallery(width) {
		let format = '_list'
		const data_block = document.createElement('div')
		data_block.className = 'FAG_data'
		this.tag.append(data_block)

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
			return item
		})

		let done_data = this.renderHeadlines(f, format)
		data_block.innerHTML = done_data
		width<=1000?this.postRender(format):this.postRender('')
	}
}
