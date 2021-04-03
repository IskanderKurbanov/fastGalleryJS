# fastGalleryjs(~dataPreviewjs)
- beta v0.0.3

simple test library for yourself



Quickstart:
```javascript
<script type="text/javascript" src=".../fag.js"></script>

<div id="fg"></div>

<script type="text/javascript">
	data = [{
		title: "Saturn's Spring",
		text: "Spring doesn't just hapen on Earth. Spring also happens on some of our neighboring planets in the solar system.",
		src: "https://www.nasa.gov/sites/default/files/images/554241main_pia11667_full.jpg",
		link:"https://www.nasa.gov/sites/default/files/thumbnails/image/654242main_p1220b3k.jpg",
		visible: true,
	},{
		title: "title",
		text: "description",
		src: "",
		link:"",
		visible: true,
	},]

	new Fag({
		tag: "#fg",
		data: data,
		path: "path where library is located",
	})
</script>
```

default data:

	{
		title: '',
		text: '',
		mobileText: '',
		img: '',
		link: '',
	}


