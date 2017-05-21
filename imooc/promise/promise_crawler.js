var http = require('http');
var cheerio =require('cheerio');
var baseUrl ='http://www.imooc.com/learn/';
var videoIds =['728','637','348','259'];

function filterChapters(html){
    var $ =cheerio.load(html);
    var chapters = $('.chapter-active');
    var title =$('.path span').text();
    var number = parseInt($('.js-learn-num').text().trim(),10);
    
    var courseData ={
        title:title,
        number:number,
        videos:[]
        
    };
    
    chapters.each(function(item){
        var chapter =$(this);
        var temp =chapter.find('strong');
        var chapterTitles =[];
        temp.contents().each(function(){
            if(this.nodeType === 3){
                chapterTitles.push(this.wholeText);
            }
        }); 
        var chapterTitle =  chapterTitles[1];
        var videos = chapter.find('video').children('li');
        var chapterData = {
            chapterTitle:chapterTitle,
            videos:[]
        }
        videos.each(function(item){
            var video =$(this);
            var videotemp = $(this).find('a').contents();
            var videoTitle ='';
            videotemp.each(function(){
                if(this.nodeType === 3){
                    videoTitle = this.wholeText;
                }
            })
            var id = video.$('a').attr('href').split('video/')[1];
            chapterData.videos.push({
                title:videoTitle,
                id:id
            })
        })
        courseData.videos.push(chapterData);
    })
    return courseData;
}
function printCourseInfo(coursesData){
    coursesData.forEach(function(courseData){
        console.log(courseData.number + '人学过' + courseData.title + '\n');
    });
     coursesData.forEach(function(courseData){
         console.log('### '+courseData.title + '\n');
         courseData.videos.forEach(function(item){
             var chapterTitle = item.chapterTitle;
             console.log(chapterTitle + '\n');
             item.videos.forEach(function(video){
                 console.log('   【'+video.id+'】'+ video.title + '\n');
             })
         })
    })
}
function getPageAsync (url){
    return new Promise(function(resolve,reject){
        console.log('正在爬去 '+ url);
        http.get(url,function(res){
            var html = '';
            
            res.on('data',function(data){
                html += data;
            });
            res.on('end',function(){
                resolve(html);
            });
        }).on('error',function(e){
              reject(e)
              console.log('获取数据信息出错！')
        })
    })
}

var fetchCourseArray = [];
videoIds.forEach(function(id){
    fetchCourseArray.push(getPageAsync(baseUrl + id));
})
Promise
    .all(fetchCourseArray)
    .then(function(pages){
        var coursesData =[];
        pages.forEach(function(html){
            var courses = filterChapters(html);
            coursesData.push(courses);
        })
        coursesData.sort(function(a,b){
            return a.number<b.number;
        })
        printCourseInfo(coursesData);
})