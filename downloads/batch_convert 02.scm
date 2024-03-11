(define (batch-convert-svg-to-thumbnail folder-path width height)
  (let* ((file-list (cadr (file-glob (string-append folder-path "/*.svg") 1))))
    (while (not (null? file-list))
      (let* ((file (car file-list))
             (file-name-no-ext (substring file 0 (- (string-length file) 4))) ; Remove .svg extension
             (image (car (gimp-file-load RUN-NONINTERACTIVE file file)))
             (drawable (car (gimp-image-get-active-layer image))))
        ; Resize image to thumbnail size
        (gimp-image-scale image width height)
        ; Export image as PNG
        (file-png-save RUN-NONINTERACTIVE image drawable
                       (string-append file-name-no-ext ".png") ; Output file name without .svg extension
                       (string-append file-name-no-ext ".png") ; Output file name without .svg extension
                       0 ; Interlace: non-interlaced
                       9 ; Compression level: maximum
                       0 ; Save background: no
                       0 ; Save gamma: no
                       0 ; Save EXIF data: no
                       0 ; Save resolution: no
                       0) ; Save creation time: no
        (gimp-image-delete image)
        (set! file-list (cdr file-list))))))
        
;(load "/home/arthur/VisualStudioProjects/drawing-and-word/downloads/batch_convert.scm")
;(batch-convert-svg-to-thumbnail "/home/arthur/VisualStudioProjects/drawing-and-word/downloads/B")

;file names
;ls /home/arthur/VisualStudioProjects/drawing-and-word/downloads/B/* | xargs -n1 basename
;ls /home/arthur/VisualStudioProjects/drawing-and-word/downloads/B/*.png | xargs -n1 basename | sed "s/^/'/" | sed "s/$/'/" | tr '\n' ',' | sed 's/,$//'
;ls -v /home/arthur/VisualStudioProjects/drawing-and-word/downloads/05/*.png | xargs -n1 basename | sed "s/^/'/" | sed "s/$/'/" | tr '\n' ',' | sed 's/,$//'





