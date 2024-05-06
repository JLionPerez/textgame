import React from 'react';

const Story = ({ scenario, onChoice, onGameResult }) => {
    const scenarios = [
        {
            id: 0,
            text: 'You find yourself standing in front of a dark cave. What do you do?',
            choices: [
                { text: 'Enter the cave', nextScenario: 1 },
                { text: 'Walk away', nextScenario: 2 }
            ]
        },
        {
            id: 1,
            text: 'As you enter the cave, you see two tunnels. Which do you choose?',
            choices: [
                { text: 'Go left', nextScenario: 3 },
                { text: 'Go right', nextScenario: 4 }
            ]
        },
        {
            id: 2,
            text: 'You walk away from the cave. The adventure ends here.',
            choices: []
        },
        {
            id: 3,
            text: 'You go left and find a key! What do you do?',
            choices: [
                { text: 'Keep the key', nextScenario: 5 },
                { text: 'Leave the key', nextScenario: 6 }
            ]
        },
        {
            id: 4,
            text: 'You go right and encounter a dead end. What do you do?',
            choices: [
                { text: 'Go back', nextScenario: 1 }
            ]
        },
        {
            id: 5,
            text: 'You keep the key. As you move forward, you find a locked door. What do you do?',
            choices: [
                { text: 'Use the key', nextScenario: 7 }
            ]
        },
        {
            id: 6,
            text: 'You leave the key behind and move forward. The adventure ends here.',
            choices: []
        },
        {
            id: 7,
            text: 'You open the door with the key and find a treasure chest! Congratulations, you found the treasure! The adventure ends here.',
            choices: []
        }
    ];

    const currentScenario = scenarios.find(s => s.id === scenario);

    const handleChoice = (choice) => {
        const nextScenario = choice.nextScenario;
        onChoice(choice);

        if (nextScenario === 7) {
            alert('Congratulations, you found the treasure! The adventure ends here.');
            onGameResult('win');
        } else if (nextScenario === 2 || nextScenario === 6) {
            onGameResult('lose');
        }
    };

    return (
        <div className="card mx-auto mt-5" style={{ maxWidth: '500px'}}>
            <div className="card-body">
                <p className="card-text">{currentScenario.text}</p>
                <ul className="list-group">
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} className="list-group-item">
                            <button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
                                {choice.text}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Story;