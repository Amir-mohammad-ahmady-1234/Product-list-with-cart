tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'Red_Hat_Text': 'Red_Hat_Text',
                'Red_Hat_Text2': 'Red_Hat_Text2',
                'Red_Hat_Text3': 'Red_Hat_Text3',
            },
            colors: {
                RedColor: 'hsl(14, 86%, 42%)',
                GreenColor: 'hsl(159, 69%, 38%)',
                white: 'rgb(255, 255, 255)',
    
                Rose50: 'hsl(20, 50%, 98%)',
                Rose100: 'hsl(13, 31%, 94%)',
                Rose300: 'hsl(14, 25%, 72%)',
                Rose400: 'hsl(7, 20%, 60%)',
                Rose500: 'hsl(12, 20%, 44%)',
                Rose900: 'hsl(14, 65%, 9%)',
            },
            backGroundImage: {
                "Waffle_image_thumbnail": "url(assets/images/image-waffle-thumbnail.jpg)",
                "Waffle_image_mobile": "url(assets/images/image-waffle-mobile.jpg)",
                "Waffle_image_tablet": "url(assets/images/image-waffle-tablet.jpg)",
                "Waffle_image_desktop": "url('./assets/images/image-waffle-desktop.jpg')",
            }
        }
    }
}