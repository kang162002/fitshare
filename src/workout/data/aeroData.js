let aeroData = [
    {
        id: 'ae000',
        title: "팔벌려 뛰기",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/jumping_jacks.png',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae001',
        title: "버피",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/burpees.png',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae002',
        title: "줄넘기",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae003',
        title: "달리기",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae004',
        title: "조깅",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae005',
        title: "스쿼트 점프",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae006',
        title: "인터벌 달리기",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae007',
        title: "천국의 계단",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae008',
        title: "자전거",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae009',
        title: "로잉머신",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae010',
        title: "수영",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    },
    {
        id: 'ae011',
        title: "마운틴 클라이머",
        content: "발을 엉덩이 너비보다 약간 넓게 벌리고 몸통을 지탱한 다음, 리프터는 골반을 뒤로 밀고 엉덩이가 무릎이나 그 아래 부분과 평행이 될 때까지 몸을 낮춥니다.\n이제 올바른 깊이에 도달한 리프터는 발꿈치를 이용해 몸을 뒤로 젖히고 수직 자세로 돌아와 반복을 완료합니다.",
        imgPath: '/images/conventional_dumbbell_squat.jpg',
        tool: "맨몸",
        area: "하체",
        level: 2
    }
];

export default aeroData;