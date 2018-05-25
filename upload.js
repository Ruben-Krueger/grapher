/**
 * Created by rubenkrueger on 5/25/18.
 */



    // upload file
var galleryUploader = new qq.FineUploader({
        element: document.getElementById("fine-uploader-gallery"),
        template: 'qq-template-gallery',
        request: {
            endpoint: '/server/uploads'
        },
        thumbnails: {
            placeholders: {
                waitingPath: '/source/placeholders/waiting-generic.png',
                notAvailablePath: '/source/placeholders/not_available-generic.png'
            }
        },
        validation: {
            allowedExtensions: ['json', 'js', 'txt']
        }
    });
