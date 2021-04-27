# fastGalleryjs(~dataPreviewjs)
- simple test library for yourself


![alt text](https://raw.githubusercontent.com/IskanderKurbanov/fastGalleryJS/main/img/preview.png)

Quickstart:
```javascript
<head>
	<script type="text/javascript" src="fag.min.js"></script>
	<link rel="stylesheet" href="fagStyle.min.css">
</head>

<div id="fg"></div>


<script type="text/javascript">
	data = [{
		title: "work",
		text: "first work.",
		mobileText:' shit sketch #7',
		img: "https://64.media.tumblr.com/153d6a0b837b5c6acf4e0126cb0a09c1/d05fc402daf519f7-a9/s1280x1920/c3f0b55775e8b70b5f49d99f56a551ff287a68ca.png",
	},
	{
		title: "work",
		text: "second work",
		mobileText:'shit sketch #8',
		img: "https://64.media.tumblr.com/8a0794dff8fdd9fe0583670b30d57707/61cca6543a97d912-08/s540x810/89bbb7971ee2cc4f1e51cb1bd2a3602643f28f3f.png",
	},{
		title: "sketch",
		text: "fail sketch #5",
		mobileText: "fail sketch #5",
		img: "https://64.media.tumblr.com/de99fc88b35565130f913f29e3207beb/9353f3a9455a1520-4b/s1280x1920/f5d739847fac41d5f51caa6fb8f71f0035cf8f62.png",
	},{
		title: "work",
		text: "frogy",
		img: "https://64.media.tumblr.com/b9a5742fbfa0abff576af12effc33d75/14b0813d76682e6b-4b/s1280x1920/2ac6bcb2ab2dc12c93c612cf37391805093dd8bb.png",
	},{
		title: "sketch",
		text: "shit sketch #4",
		mobileText:'shit sketch #4',
		img: "https://64.media.tumblr.com/1f70f4fb234c8d083cc7415080d70274/3edddcca7b00b547-82/s1280x1920/e62aa45cc30617d5d9ba7f10cf4cddc39f650cf8.png",
	},]

	new Fag({
		tag: "#fg",
		data: data,
	},)
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


