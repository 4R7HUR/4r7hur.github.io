(define (batch-convert-svg-to-thumbnail folder-path)
  (let* ((file-list (cadr (file-glob (string-append folder-path "/*.svg") 1))))
    (while (not (null? file-list))
      (let* ((file (car file-list))
             (image (car (gimp-file-load RUN-NONINTERACTIVE file file)))
             (drawable (car (gimp-image-get-active-layer image))))
        ; Resize image to thumbnail size
        (gimp-image-scale image 272 168)
        ; Export image as PNG
        (file-png-save RUN-NONINTERACTIVE image drawable
                       (string-append file ".png") ; Output file name
                       (string-append file ".png") ; Output file name
                       0 ; Interlace: non-interlaced
                       9 ; Compression level: maximum
                       0 ; Save background: no
                       0 ; Save gamma: no
                       0 ; Save EXIF data: no
                       0 ; Save resolution: no
                       0) ; Save creation time: no
        (gimp-image-delete image)
        (set! file-list (cdr file-list))))))


