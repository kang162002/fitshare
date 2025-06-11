let stretchData = [
    {
        id: 'st000',
        title: "복부 스트레칭",
        content: "이 운동은 등을 대고 누워 무릎을 가슴 쪽으로 당겨 복근을 스트레칭하는 운동입니다. 유연성을 향상시키고 허리의 긴장을 완화하는 데 도움이 됩니다.",
        imgPath: '/images/abdominal_stretch.jpg',
        tool: "맨몸",
        area: ["허리"],
        level: 1,
        fav: false
    },
    {
        id: 'st001',
        title: "내전근 스트레칭",
        content: "이 운동은 허벅지 안쪽 근육인 내전근을 스트레칭하는 운동입니다. 바닥에 앉아 다리를 쭉 뻗은 상태에서 발바닥을 모아 몸 쪽으로 당겨줍니다. 이 스트레칭은 유연성을 향상시키고 사타구니와 엉덩이 부위의 부상을 예방하는 데 도움이 됩니다",
        imgPath: '/images/adductor_stretch.jpg',
        tool: "맨몸",
        area: ["엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st002',
        title: "머리 위 가슴 스트레칭",
        content: "이 운동은 팔을 머리 위로 뻗고 서서 손가락을 깍지 끼고 선 후, 팔을 뒤로 당겨 내리면서 가슴 근육을 스트레칭하는 운동입니다.",
        imgPath: '/images/above_head_chest_stretch.jpg',
        tool: "맨몸",
        area: ["가슴"],
        level: 1,
        fav: false
    },
    {
        id: 'st003',
        title: "아르다 맛센드라사나 요가 자세",
        content: "이 운동은 아르다-맛센드라사나 요가 자세라고 합니다. 한 다리를 다른 다리 위에 교차하고 반대쪽 팔로 무릎을 감싸고 앉아 몸통을 비틀는 동작입니다. 이 자세는 소화 기능과 척추 유연성을 향상시킨다고 합니다.",
        imgPath: '/images/ardha_yoga_pose.jpg',
        tool: "맨몸",
        area: ["허벅지"],
        level: 2,
        fav: false
    },
    {
        id: 'st004',
        title: "팔 굽혀 펴기\n어깨 스트레칭",
        content: "이 운동은 한쪽 팔을 가슴 앞에서 다른 팔로 살짝 당겨 어깨를 스트레칭하는 운동입니다. 어깨의 유연성과 가동성을 향상시키는 데 도움이 됩니다.",
        imgPath: '/images/bent_arm_shoulder_stretch.jpg',
        tool: "맨몸",
        area: ["어깨"],
        level: 1,
        fav: false
    },
    {
        id: 'st005',
        title: "활 요가 자세",
        content: "이 운동은 발을 엉덩이 너비로 벌리고 서서 허리를 앞으로 숙인 후, 팔을 뒤로 뻗어 발목을 잡습니다. 그런 다음 가슴과 다리를 바닥에서 들어 올려 몸을 활 모양으로 만듭니다. 이 자세는 몸 앞쪽을 스트레칭하고 등 근육을 강화하는 데 도움이 됩니다.",
        imgPath: '/images/bow_yoga_pose.jpg',
        tool: "맨몸",
        area: ["허벅지","엉덩이"],
        level: 2,
        fav: false
    },
    {
        id: 'st006',
        title: "등 스트레칭",
        content: "이 운동은 등 근육을 스트레칭하여 유연성을 향상시키고 긴장을 완화하는 운동입니다. 서기, 앉기, 눕기 등 다양한 자세로 할 수 있으며, 팔을 뻗거나, 비틀거나, 구부리는 동작이 포함될 수 있습니다.",
        imgPath: '/images/back_stretch.jpg',
        tool: "맨몸",
        area: ["등"],
        level: 2,
        fav: false
    },
    {
        id: 'st007',
        title: "나비 요가 자세",
        content: "다리를 굽히고 발바닥을 맞대고 앉아 마치 나비 날개처럼 만드는 요가 자세입니다. 엉덩이, 사타구니, 허벅지 안쪽을 스트레칭하는 데 효과적입니다.",
        imgPath: '/images/butterfly_yoga_pose.jpg',
        tool: "맨몸",
        area: ["허벅지"],
        level: 2,
        fav: false
    },
    {
        id: 'st008',
        title: "바디 익스텐션",
        content: "이 운동은 바닥에 엎드려 팔, 다리, 가슴을 동시에 바닥에서 들어 올려 등과 엉덩이 근육을 단련하는 운동입니다. 몇 초 동안 자세를 유지한 후 다시 바닥으로 내려오는 것이 목표입니다. 이 운동은 자세를 개선하고 등과 코어 근육을 강화하는 데 도움이 됩니다.",
        imgPath: '/images/body_extension.jpg',
        tool: "맨몸",
        area: ["허벅지"],
        level: 2,
        fav: false
    },
    {
        id: 'st009',
        title: "회전 가슴 리프트",
        content: "이 운동은 바닥에 등을 대고 누워 가슴을 바닥에서 들어 올리면서 몸통을 한쪽으로 돌리는 동작입니다. 주로 코어 근육을 강화하여 척추의 유연성과 자세를 개선하는 데 도움이 됩니다.",
        imgPath: '/images/chest_lift_rotation.jpg',
        tool: "맨몸",
        area: ["허리"],
        level: 1,
        fav: false
    },
    {
        id: 'st010',
        title: "낙타 자세",
        content: "이 운동은 요가에서 낙타 자세 또는 우스트라사나라고 합니다. 바닥에 무릎을 꿇고 등을 굽히면서 손으로 발꿈치를 잡는 동작입니다. 가슴, 복부, 허벅지를 스트레칭하는 백벤드 자세입니다.",
        imgPath: '/images/camel_pose.jpg',
        tool: "맨몸",
        area: ["허벅지","어깨"],
        level: 2,
        fav: false
    },
    {
        id: 'st011',
        title: "악어 요가 자세",
        content: "이 운동은 엎드려 누워 상체를 바닥에서 들어 올리는 동시에 다리와 하체는 바닥에 붙입니다. 팔은 앞으로 뻗어 마치 악어 자세를 연상시킵니다. 이 자세는 등 근육을 강화하고 자세를 교정하는 데 도움이 됩니다.",
        imgPath: '/images/crocodile_yoga.jpg',
        tool: "맨몸",
        area: ["허벅지", "엉덩이", "등"],
        level: 2,
        fav: false
    },
    {
        id: 'st012',
        title: "고양이 소 \n 스트레칭",
        content: "캣 카우 스트레칭은 척추를 둥글게 굽힌 고양이 자세와 척추를 굽힌 소 자세를 오가는 요가 자세입니다. 워밍업이나 척추의 유연성 향상에 자주 사용됩니다.",
        imgPath: '/images/catcow_stretch.jpg',
        tool: "맨몸",
        area: ["허리", "등"],
        level: 2,
        fav: false
    },
    {
        id: 'st013',
        title: "크로스 오버\n숄더 스트레칭",
        content: "이 운동은 한쪽 팔을 가슴 위로 뻗고 다른 팔로 팔을 몸 가까이 당겨 어깨와 상체 근육을 스트레칭하는 운동입니다. 유연성을 향상시키고 상체의 긴장을 완화하는 데 도움이 될 수 있습니다.",
        imgPath: '/images/crossover_shoulder_stretch.jpg',
        tool: "맨몸",
        area: ["등"],
        level: 2,
        fav: false
    },
    {
        id: 'st014',
        title: "코브라 요가 자세",
        content: "엎드려 누워 가슴과 머리를 바닥에서 들어 올리는 요가 자세입니다. 팔은 곧게 펴고 손은 바닥에 댄 채로 유지합니다. 이 자세는 등 근육을 강화하고 자세를 교정하는 데 도움이 됩니다.",
        imgPath: '/images/cobra_yoga.jpg',
        tool: "맨몸",
        area: ["허리"],
        level: 2,
        fav: false
    },
    {
        id: 'st015',
        title: "소 스트레칭",
        content: "카우 스트레칭은 네 발로 서서 등을 굽히고 머리와 꼬리뼈를 천장 쪽으로 들어 올리는 요가 자세입니다. 이 스트레칭은 척추의 긴장을 풀고 등과 목의 유연성을 향상시키는 데 도움이 됩니다.",
        imgPath: '/images/cow_stretch.jpg',
        tool: "맨몸",
        area: ["허리", "엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st016',
        title: "다이나믹 백 스트레칭",
        content: "이 운동은 몸을 역동적으로 움직여 등 근육을 스트레칭하는 운동입니다. 유연성을 향상시키고 등 근육의 긴장을 완화하는 데 도움이 될 수 있습니다.",
        imgPath: '/images/dynamic_back_stretch.jpg',
        tool: "맨몸",
        area: ["등"],
        level: 1,
        fav: false
    },
    {
        id: 'st017',
        title: "다이나믹 체스트 스트레칭",
        content: "이 운동은 팔을 등 뒤로 뻗고 서서 손가락을 깍지 끼고, 팔을 몸에서 멀리 들어 올려 가슴 근육을 스트레칭하는 운동입니다. 이 동작은 유연하고 역동적인 동작으로 여러 번 반복합니다.",
        imgPath: '/images/dynamic_chest_stretch.jpg',
        tool: "맨몸",
        area: ["가슴"],
        level: 1,
        fav: false
    },
    {
        id: 'st018',
        title: "팔꿈치 등\n스트레칭",
        content: "이 운동은 팔을 등 뒤로 하고 서서 손가락을 깍지 끼고 선 다음, 팔을 몸에서 멀리 들어 올려 가슴과 어깨를 스트레칭합니다.",
        imgPath: '/images/elbows_back_stretch.jpg',
        tool: "맨몸",
        area: ["등"],
        level: 1,
        fav: false
    },
    {
        id: 'st019',
        title: "어깨 외부 회전 스트레칭",
        content: "이 운동은 어깨 근육을 바깥쪽으로 돌려 스트레칭하는 운동입니다. 어깨의 유연성과 가동 범위를 향상시키는 데 도움이 될 수 있습니다.",
        imgPath: '/images/external_shoulder_rotation_stretch.jpg',
        tool: "맨몸",
        area: ["가슴"],
        level: 1,
        fav: false
    },
    {
        id: 'st020',
        title: "팔 서클",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["어깨"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "시체 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "차투랑가 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "돌고래 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "더블 비둘기 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "독수리 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "사지 지팡이",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "개구리 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "반 태양 예배",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "하이런지",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "힐 프레스",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "도마뱀 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    },
    {
        id: 'st100',
        title: "산 자세",
        content: "이 운동은 팔을 옆으로 뻗고 서서 팔로 원을 그리는 동작을 포함합니다. 어깨의 가동 범위를 넓히고 상체의 혈액 순환을 개선하기 위한 워밍업 운동으로 자주 사용됩니다.",
        imgPath: '/images/arm_circles.jpg',
        tool: "맨몸",
        area: ["허리","허벅지","가슴","등","어깨","엉덩이"],
        level: 1,
        fav: false
    }
];

export default stretchData;