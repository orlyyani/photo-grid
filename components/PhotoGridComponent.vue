<template>
	<div class="grid-component">
		<div class="__image_container" v-bind:style="styles">
			<slot>
    	</slot>
			<div v-if="count > 0" v-on:click="passData()" class="__image_body __quarter __image_count"><p>{{image_excess}}</p></div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props: {
			boxWidth: { type: String, default: 'auto' },
			boxHeight: { type: String, default: '200px' },
			boxBorder: { type: Number, default: 0 },
			excessText: { type: String, default: 'View more {{count}} images'}
		},

		data: function(){
			return{
				styles: {
					width: this.boxWidth,
					height: this.boxHeight,
					'border-radius': this.boxBorder + 'px',
					overflow: 'hidden'
				},
				image_excess: 0
			}
		},

		computed: {
			$child() {
      	return this.$el;
    	},

    	countImageLength(){
				return this.$slots.default.length
			},

			count(){
				return this.$slots.default.length - 4;
			},
		},

		mounted(){
			let __image_Size = this.$slots.default.length;
			this.$slots.default.forEach(vnode => {
				vnode.elm.className += "__image_body"

        vnode.elm.setAttribute("style", "background-image: url( " + vnode.elm.src + ")");
				switch (true) {
					case (__image_Size == 1):
	      		vnode.elm.className += " __single"
					break;
					case (__image_Size == 3):
	      		vnode.elm.className += " __triple"
					break;
					case (__image_Size == 4):
	      		vnode.elm.className += " __quarter"
					break;
					case (__image_Size > 4):
	      		vnode.elm.className += " __quarter __more_image"
					break;
				}
	    }),

	    this.pareseExcessText()
		},

		methods: {
			passData(){
				this.$emit('clickExcess')
			},

			pareseExcessText(){
				this.image_excess = this.excessText.replace('{{count}}', this.$slots.default.length - 4);
			}
		}
	}
</script>

<style scoped>
	.__image_container{
		height: 200px;
		width: 200px;
		display: inline-block;
		position: relative;
	}
	.__image_body:first-child, .__image_body:last-child, .__image_body.__quarter:nth-child(3){
		float: left;
	}
	.__image_body.__single{
    width: 100%;
    height: 100%;
  }
  .__image_body.__triple, .__image_body.__quarter{
    height: 50%;
  }
  .__image_body.__triple:nth-child(2), .__image_body.__quarter:nth-child(2), 
  .__image_body.__quarter:last-child, .__image_body.__more_image:nth-child(4){
  	float: right;
  }
  .__image_count{
  	display: inline-flex !important;
    align-items: center !important;
    justify-content: center;
  	position: absolute;
    bottom: 0;
    color: #fff;
    font-size: 1em;
    background: rgba(0, 0, 0, 0.5) !important;
  }
  .__image_body.__triple:last-child{
  	width: 100%;
  }
	.__image_body{
    width: 50%;
    height: 100%;
    background: #d8d8d8;
    object-fit: cover;
    display: inline;
  }
</style>