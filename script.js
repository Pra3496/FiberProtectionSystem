  let image = document.getElementById('image');
				let maxi = -20;
				let mini = 0;	
				let chg = 0;
				
			

				function incret() {maxi++;document.getElementById('max').innerHTML = max.value=maxi;}
				function dcret() {maxi--;document.getElementById('max').innerHTML = max.value=maxi;}
				
			const images0 = ['Tejas1.png','Tejas1.png'];

			const images1 = ['Tejas1.png','Tejas1.png','Tejas2.png','Tejas3.png','Tejas4.png','Tejas5.png','Tejas6.png','Tejas7.png','Tejas8.png','Tejas9.png','Tejas10.png','Tejas11.png','Tejas12.png','Tejas13.png','Tejas14.png'];
			
			const images2 = ['Tejas1.png','Tejas1.png','Tejas3.png','Tejas5.png','Tejas8.png','Tejas10.png','Tejas12.png','Tejas14.png'];
			
			const images3 = ['Tejas1.png','Tejas1.png','Tejas4.png','Tejas7.png','Tejas10.png','Tejas14.png'];

	

			var myarr = [images0, images1, images2, images3, images4, images5, images6];
			let ran = 0;
			setInterval(
			function(){

				if((maxi >= -20)&&(maxi < -15)){
					chg = 0;}

				if((maxi >= -15)&&(maxi < -10)){
					chg = 1;}

				if((maxi >= -9)&&(maxi > -7)){
					chg = 2;}

				if(maxi >= -6){
					chg = 3;}

				if(ran > myarr[chg].length-1){
					ran = 0;}

					 image.src = myarr[chg][ran];ran++;},300);

