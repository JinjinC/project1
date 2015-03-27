    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(116.360549,40.052958),17);

       map.setMapStyle({
                  styleJson:[
                    {
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": {
                                  "lightness": 10,
                                  "saturation": -100
                                    }
                    }
                  ]

              });
    }
    function setMapEvent(){
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      var markers = [
        {content:"北京蓝海讯通科技有限公司",title:"OneAPM",imageOffset: {width:-23,height:-21},position:{lat:40.0534,lng:116.361725}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        label.setStyle({ border : "none"});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
      };
      var plOpts = [
        {strokeColor:"#00f",strokeWeight:"2",strokeOpacity:"0.6"}
      ];
      var plPath = [
        [
          new BMap.Point(116.359102,40.051908),
          new BMap.Point(116.361707,40.05253),
          new BMap.Point(116.361438,40.053227),
          new BMap.Point(116.361716,40.053282),
          new BMap.Point(116.361716,40.053282),
          new BMap.Point(116.361716,40.053282)
        ],
      ];
      for(var index = 0; index < plOpts.length; index++){
        var polyline = new BMap.Polyline(plPath[index],plOpts[index]);
        map.addOverlay(polyline);
      }
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
    }
    var map;
      initMap();