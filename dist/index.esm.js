import jsonLogic from 'json-logic-js';

function evaluateClass(gotchi, className, logic) {
    const jsl = getJsonLogicInstance();
    return jsl.apply(logic, gotchi);
}
function evaluateTrait(gotchi, traitName, logic) {
    const jsl = getJsonLogicInstance();
    return jsl.apply(logic, gotchi);
}
function getJsonLogicInstance() {
    var pow = function (a, b) { return Math.pow(a, b); };
    jsonLogic.add_operation("pow", pow);
    return jsonLogic;
}

var Classes;
(function (Classes) {
    Classes["CLEAVERS"] = "cleavers";
    Classes["CURSED"] = "cursed";
    Classes["ENLIGHTENED"] = "enlightened";
    Classes["HEALER"] = "healer";
    Classes["MAGE"] = "mage";
    Classes["NINJA"] = "ninja";
    Classes["TANK"] = "tank";
    Classes["TROLL"] = "troll";
})(Classes || (Classes = {}));

var and$7 = [
	{
		"if": [
			{
				">=": [
					{
						"var": "agg"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "nrg"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "agg"
							},
							{
								"var": "nrg"
							}
						]
					},
					{
						">=": [
							{
								"var": "agg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "nrg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "agg"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "spk"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "agg"
							},
							{
								"var": "spk"
							}
						]
					},
					{
						">=": [
							{
								"var": "agg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "spk"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "agg"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "brn"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "agg"
							},
							{
								"var": "brn"
							}
						]
					},
					{
						">=": [
							{
								"var": "agg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "brn"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var cleavers = {
	and: and$7
};

var and$6 = [
	{
		"if": [
			{
				">=": [
					{
						"var": "spk"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "nrg"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "spk"
							},
							{
								"var": "nrg"
							}
						]
					},
					{
						">=": [
							{
								"var": "spk"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "nrg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "spk"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "agg"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "spk"
							},
							{
								"var": "agg"
							}
						]
					},
					{
						">=": [
							{
								"var": "spk"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "agg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "spk"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "brn"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "spk"
							},
							{
								"var": "brn"
							}
						]
					},
					{
						">=": [
							{
								"var": "spk"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "brn"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var cursed = {
	and: and$6
};

var and$5 = [
	{
		"if": [
			{
				"<=": [
					{
						"var": "nrg"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "agg"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "nrg"
							},
							{
								"var": "agg"
							}
						]
					},
					{
						"<=": [
							{
								"var": "nrg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "agg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "nrg"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "spk"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "nrg"
							},
							{
								"var": "spk"
							}
						]
					},
					{
						"<=": [
							{
								"var": "nrg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "spk"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "nrg"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "brn"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "nrg"
							},
							{
								"var": "brn"
							}
						]
					},
					{
						"<=": [
							{
								"var": "nrg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "brn"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var enlightened = {
	and: and$5
};

var and$4 = [
	{
		"if": [
			{
				"<=": [
					{
						"var": "spk"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "nrg"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "spk"
							},
							{
								"var": "nrg"
							}
						]
					},
					{
						"<=": [
							{
								"var": "spk"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "nrg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "spk"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "agg"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "spk"
							},
							{
								"var": "agg"
							}
						]
					},
					{
						"<=": [
							{
								"var": "spk"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "agg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "spk"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "brn"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "spk"
							},
							{
								"var": "brn"
							}
						]
					},
					{
						"<=": [
							{
								"var": "spk"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "brn"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var healer = {
	and: and$4
};

var and$3 = [
	{
		"if": [
			{
				">=": [
					{
						"var": "brn"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "nrg"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "brn"
							},
							{
								"var": "nrg"
							}
						]
					},
					{
						">=": [
							{
								"var": "brn"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "nrg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "brn"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "agg"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "brn"
							},
							{
								"var": "agg"
							}
						]
					},
					{
						">=": [
							{
								"var": "brn"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "agg"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "brn"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "spk"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "brn"
							},
							{
								"var": "spk"
							}
						]
					},
					{
						">=": [
							{
								"var": "brn"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "spk"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var mage = {
	and: and$3
};

var and$2 = [
	{
		"if": [
			{
				">=": [
					{
						"var": "nrg"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "agg"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "nrg"
							},
							{
								"var": "agg"
							}
						]
					},
					{
						">=": [
							{
								"var": "nrg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "agg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "nrg"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "spk"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "nrg"
							},
							{
								"var": "spk"
							}
						]
					},
					{
						">=": [
							{
								"var": "nrg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "spk"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				">=": [
					{
						"var": "nrg"
					},
					50
				]
			},
			{
				"if": [
					{
						">=": [
							{
								"var": "brn"
							},
							50
						]
					},
					{
						">=": [
							{
								"var": "nrg"
							},
							{
								"var": "brn"
							}
						]
					},
					{
						">=": [
							{
								"var": "nrg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "brn"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var ninja = {
	and: and$2
};

var and$1 = [
	{
		"if": [
			{
				"<=": [
					{
						"var": "agg"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "nrg"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "agg"
							},
							{
								"var": "nrg"
							}
						]
					},
					{
						"<=": [
							{
								"var": "agg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "nrg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "agg"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "spk"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "agg"
							},
							{
								"var": "spk"
							}
						]
					},
					{
						"<=": [
							{
								"var": "agg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "spk"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "agg"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "brn"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "agg"
							},
							{
								"var": "brn"
							}
						]
					},
					{
						"<=": [
							{
								"var": "agg"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "brn"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var tank = {
	and: and$1
};

var and = [
	{
		"if": [
			{
				"<=": [
					{
						"var": "brn"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "nrg"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "brn"
							},
							{
								"var": "nrg"
							}
						]
					},
					{
						"<=": [
							{
								"var": "brn"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "nrg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "brn"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "agg"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "brn"
							},
							{
								"var": "agg"
							}
						]
					},
					{
						"<=": [
							{
								"var": "brn"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "agg"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	},
	{
		"if": [
			{
				"<=": [
					{
						"var": "brn"
					},
					50
				]
			},
			{
				"if": [
					{
						"<=": [
							{
								"var": "spk"
							},
							50
						]
					},
					{
						"<=": [
							{
								"var": "brn"
							},
							{
								"var": "spk"
							}
						]
					},
					{
						"<=": [
							{
								"var": "brn"
							},
							{
								"+": [
									100,
									{
										"*": [
											-1,
											{
												"var": "spk"
											}
										]
									}
								]
							}
						]
					}
				]
			},
			false
		]
	}
];
var troll = {
	and: and
};

var accuracy = {
	"+": [
	50,
	{
		"*": [
			{
				"+": [
					{
						"if": [
							{
								"<": [
									{
										"var": "eys"
									},
									50
								]
							},
							{
								"-": [
									50,
									{
										"var": "eys"
									}
								]
							},
							{
								"-": [
									{
										"var": "eys"
									},
									49
								]
							}
						]
					},
					{
						"if": [
							{
								"<": [
									{
										"var": "eyc"
									},
									50
								]
							},
							{
								"-": [
									50,
									{
										"var": "eyc"
									}
								]
							},
							{
								"-": [
									{
										"var": "eyc"
									},
									49
								]
							}
						]
					}
				]
			},
			0.5
		]
	}
]
};

var armor = {
	"if": [
	{
		">=": [
			{
				"var": "agg"
			},
			50
		]
	},
	0,
	{
		"*": [
			{
				"-": [
					50,
					{
						"var": "agg"
					}
				]
			},
			2
		]
	}
]
};

var crit$1 = {
	"if": [
	{
		">=": [
			{
				"var": "agg"
			},
			50
		]
	},
	{
		"*": [
			{
				"-": [
					{
						"var": "agg"
					},
					49
				]
			},
			0.5
		]
	},
	0
]
};

var evade = {
	"if": [
	{
		">=": [
			{
				"var": "spk"
			},
			50
		]
	},
	{
		"*": [
			{
				"-": [
					{
						"var": "spk"
					},
					49
				]
			},
			0.3
		]
	},
	0
]
};

var health = {
	"if": [
	{
		">=": [
			{
				"var": "nrg"
			},
			50
		]
	},
	{
		"*": [
			{
				"var": "brs"
			},
			0.75
		]
	},
	{
		"+": [
			{
				"*": [
					{
						"-": [
							50,
							{
								"var": "nrg"
							}
						]
					},
					12
				]
			},
			{
				"*": [
					{
						"var": "brs"
					},
					0.75
				]
			}
		]
	}
]
};

var magic = {
	"if": [
	{
		"<": [
			{
				"var": "brn"
			},
			50
		]
	},
	{
		"*": [
			{
				"var": "brs"
			},
			0.25
		]
	},
	{
		"+": [
			{
				"*": [
					{
						"-": [
							{
								"var": "brn"
							},
							50
						]
					},
					5
				]
			},
			{
				"*": [
					{
						"var": "brs"
					},
					0.25
				]
			}
		]
	}
]
};

var physical = {
	"if": [
	{
		">=": [
			{
				"var": "brn"
			},
			50
		]
	},
	{
		"*": [
			{
				"var": "brs"
			},
			0.25
		]
	},
	{
		"+": [
			{
				"*": [
					{
						"-": [
							50,
							{
								"var": "brn"
							}
						]
					},
					5
				]
			},
			{
				"*": [
					{
						"var": "brs"
					},
					0.25
				]
			}
		]
	}
]
};

var resist = {
	"if": [
	{
		">=": [
			{
				"var": "spk"
			},
			50
		]
	},
	0,
	{
		"-": [
			50,
			{
				"var": "spk"
			}
		]
	}
]
};

var speed = {
	"if": [
	{
		">=": [
			{
				"var": "nrg"
			},
			50
		]
	},
	{
		"+": [
			51,
			{
				"var": "nrg"
			}
		]
	},
	100
]
};

function createBattlerGotchi(gotchi) {
    const battlerGotchi = createEmptyBattlerGotchi(gotchi.id);
    if (evaluateClass(gotchi.traits, Classes.CURSED, cursed)) {
        battlerGotchi.classes.push(Classes.CURSED);
    }
    if (evaluateClass(gotchi.traits, Classes.CLEAVERS, cleavers)) {
        battlerGotchi.classes.push(Classes.CLEAVERS);
    }
    if (evaluateClass(gotchi.traits, Classes.ENLIGHTENED, enlightened)) {
        battlerGotchi.classes.push(Classes.ENLIGHTENED);
    }
    if (evaluateClass(gotchi.traits, Classes.HEALER, healer)) {
        battlerGotchi.classes.push(Classes.HEALER);
    }
    if (evaluateClass(gotchi.traits, Classes.MAGE, mage)) {
        battlerGotchi.classes.push(Classes.MAGE);
    }
    if (evaluateClass(gotchi.traits, Classes.NINJA, ninja)) {
        battlerGotchi.classes.push(Classes.NINJA);
    }
    if (evaluateClass(gotchi.traits, Classes.TANK, tank)) {
        battlerGotchi.classes.push(Classes.TANK);
    }
    if (evaluateClass(gotchi.traits, Classes.TROLL, troll)) {
        battlerGotchi.classes.push(Classes.TROLL);
    }
    battlerGotchi.traits.accuracy = evaluateTrait(gotchi.traits, 'accuracy', accuracy);
    battlerGotchi.traits.armor = evaluateTrait(gotchi.traits, 'armor', armor);
    battlerGotchi.traits.crit = evaluateTrait(gotchi.traits, 'crit', crit$1);
    battlerGotchi.traits.evade = evaluateTrait(gotchi.traits, 'evade', evade);
    battlerGotchi.traits.health = evaluateTrait(gotchi.traits, 'health', health);
    battlerGotchi.traits.magic = evaluateTrait(gotchi.traits, 'magic', magic);
    battlerGotchi.traits.physical = evaluateTrait(gotchi.traits, 'physical', physical);
    battlerGotchi.traits.resist = evaluateTrait(gotchi.traits, 'resist', resist);
    battlerGotchi.traits.speed = evaluateTrait(gotchi.traits, 'speed', speed);
    return battlerGotchi;
}
function createEmptyBattlerGotchi(id) {
    return {
        id: id,
        classes: [],
        traits: {
            accuracy: 0,
            armor: 0,
            crit: 0,
            evade: 0,
            health: 0,
            magic: 0,
            physical: 0,
            resist: 0,
            speed: 0
        }
    };
}

var hp = {
	"+": [
	{
		"*": [
			{
				"/": [
					{
						"-": [
							{
								"if": [
									{
										"<": [
											{
												"var": "nrg"
											},
											50
										]
									},
									{
										pow: [
											3,
											{
												"-": [
													1,
													{
														"/": [
															{
																"+": [
																	{
																		"var": "nrg"
																	},
																	10
																]
															},
															120
														]
													}
												]
											}
										]
									},
									{
										pow: [
											3,
											{
												"/": [
													{
														"+": [
															{
																"var": "nrg"
															},
															10
														]
													},
													120
												]
											}
										]
									}
								]
							},
							1
						]
					},
					2
				]
			},
			500
		]
	},
	500
]
};

var attack = {
	"+": [
	{
		"*": [
			{
				"/": [
					{
						"-": [
							{
								"if": [
									{
										"<": [
											{
												"var": "agg"
											},
											50
										]
									},
									{
										pow: [
											3,
											{
												"-": [
													1,
													{
														"/": [
															{
																"+": [
																	{
																		"var": "agg"
																	},
																	10
																]
															},
															120
														]
													}
												]
											}
										]
									},
									{
										pow: [
											3,
											{
												"/": [
													{
														"+": [
															{
																"var": "agg"
															},
															10
														]
													},
													120
												]
											}
										]
									}
								]
							},
							1
						]
					},
					2
				]
			},
			50
		]
	},
	50
]
};

var crit = {
	"+": [
	{
		"*": [
			{
				"/": [
					{
						"-": [
							{
								"if": [
									{
										"<": [
											{
												"var": "spk"
											},
											50
										]
									},
									{
										pow: [
											3,
											{
												"-": [
													1,
													{
														"/": [
															{
																"+": [
																	{
																		"var": "spk"
																	},
																	10
																]
															},
															120
														]
													}
												]
											}
										]
									},
									{
										pow: [
											3,
											{
												"/": [
													{
														"+": [
															{
																"var": "spk"
															},
															10
														]
													},
													120
												]
											}
										]
									}
								]
							},
							1
						]
					},
					2
				]
			},
			20
		]
	},
	5
]
};

var ap = {
	"+": [
	{
		"*": [
			{
				"/": [
					{
						"-": [
							{
								"if": [
									{
										"<": [
											{
												"var": "brn"
											},
											50
										]
									},
									{
										pow: [
											3,
											{
												"-": [
													1,
													{
														"/": [
															{
																"+": [
																	{
																		"var": "brn"
																	},
																	10
																]
															},
															120
														]
													}
												]
											}
										]
									},
									{
										pow: [
											3,
											{
												"/": [
													{
														"+": [
															{
																"var": "brn"
															},
															10
														]
													},
													120
												]
											}
										]
									}
								]
							},
							1
						]
					},
					2
				]
			},
			300
		]
	},
	200
]
};

var doubleStrikeChance = {
	"var": "eys"
};

var critDamageIncrease = {
	"var": "eyc"
};

var wearables = [
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 0,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 1,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 10,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 10,
		id: 100,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.4
				]
			}
		},
		rarityScoreModifier: 10,
		id: 101,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.4
				]
			}
		},
		rarityScoreModifier: 10,
		id: 102,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					30
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 20,
		id: 103,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.8
				]
			}
		},
		rarityScoreModifier: 10,
		id: 104,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 105,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					22
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 10,
		id: 106,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					40.019999999999996
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 50,
		id: 107,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 108,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 109,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 11,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 110,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 111,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.8
				]
			}
		},
		rarityScoreModifier: 10,
		id: 112,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					420
				]
			}
		},
		rarityScoreModifier: 50,
		id: 113,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			}
		},
		rarityScoreModifier: 20,
		id: 114,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 115,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.1
				]
			}
		},
		rarityScoreModifier: 5,
		id: 116,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 117,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 118,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.4
				]
			}
		},
		rarityScoreModifier: 10,
		id: 119,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 12,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					84
				]
			}
		},
		rarityScoreModifier: 10,
		id: 120,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					75
				]
			}
		},
		rarityScoreModifier: 5,
		id: 121,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					10
				]
			}
		},
		rarityScoreModifier: 20,
		id: 122,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3
				]
			}
		},
		rarityScoreModifier: 2,
		id: 123,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					150
				]
			}
		},
		rarityScoreModifier: 20,
		id: 124,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 125,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 2,
		id: 126,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 5,
		id: 127,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 2,
		id: 128,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 5,
		id: 129,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					60
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					6
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 13,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 1,
		id: 130,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 131,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 132,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 133,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 134,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					37.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 135,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					50
				]
			}
		},
		rarityScoreModifier: 5,
		id: 136,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 137,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 138,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		rarityScoreModifier: 5,
		id: 139,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					120
				]
			}
		},
		rarityScoreModifier: 20,
		id: 14,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 140,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 141,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 142,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 143,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					60
				]
			}
		},
		rarityScoreModifier: 20,
		id: 144,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					9.2
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					70
				]
			}
		},
		rarityScoreModifier: 50,
		id: 145,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 146,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 147,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 5,
		id: 148,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 149,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			}
		},
		rarityScoreModifier: 20,
		id: 15,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					60
				]
			}
		},
		rarityScoreModifier: 20,
		id: 150,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 151,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 152,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					50
				]
			}
		},
		rarityScoreModifier: 5,
		id: 153,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 154,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 155,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					210
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 156,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 157,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 158,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.8
				]
			}
		},
		rarityScoreModifier: 10,
		id: 159,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					280
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					13.34
				]
			}
		},
		rarityScoreModifier: 50,
		id: 16,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					300
				]
			}
		},
		rarityScoreModifier: 20,
		id: 160,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					280
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					13.34
				]
			}
		},
		rarityScoreModifier: 50,
		id: 161,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 162,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 163,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 164,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 165,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 166,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 167,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 168,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 169,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					210
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 50,
		id: 17,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 170,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 171,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 172,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 173,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 20,
		id: 174,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 2,
		id: 175,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 176,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 177,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 178,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 179,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 18,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 180,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 181,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 182,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 183,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 184,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 185,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 186,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 187,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 188,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 189,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 19,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 190,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 191,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 192,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 193,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 194,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 195,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 196,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 197,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 198,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.1
				]
			}
		},
		rarityScoreModifier: 5,
		id: 199,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 2,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 1,
		id: 20,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3
				]
			}
		},
		rarityScoreModifier: 2,
		id: 200,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 10,
		id: 201,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					18
				]
			}
		},
		rarityScoreModifier: 20,
		id: 202,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 203,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 204,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 205,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 206,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 207,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3
				]
			}
		},
		rarityScoreModifier: 2,
		id: 208,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 209,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 21,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 210,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 211,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 212,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					224
				]
			}
		},
		rarityScoreModifier: 10,
		id: 213,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					210
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					20.009999999999998
				]
			}
		},
		rarityScoreModifier: 50,
		id: 214,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 215,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					10
				]
			}
		},
		rarityScoreModifier: 20,
		id: 216,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					18
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 20,
		id: 217,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 218,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 219,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 22,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 220,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 221,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 222,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 2,
		id: 223,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 224,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 1,
		id: 225,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			}
		},
		rarityScoreModifier: 5,
		id: 226,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 227,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 228,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 2,
		id: 229,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					75
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 2,
		id: 23,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 230,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 231,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 232,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 233,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					300
				]
			}
		},
		rarityScoreModifier: 20,
		id: 234,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					224
				]
			}
		},
		rarityScoreModifier: 10,
		id: 235,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					50
				]
			}
		},
		rarityScoreModifier: 5,
		id: 236,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 237,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6.8999999999999995
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 238,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 239,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 24,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 240,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		rarityScoreModifier: 5,
		id: 241,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 242,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		rarityScoreModifier: 5,
		id: 243,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		rarityScoreModifier: 5,
		id: 244,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.1
				]
			}
		},
		rarityScoreModifier: 5,
		id: 245,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 246,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 247,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 248,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 249,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 25,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 250,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					50
				]
			}
		},
		rarityScoreModifier: 5,
		id: 251,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 252,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 253,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 1,
		id: 254,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 255,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 256,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					224
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 10,
		id: 257,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					210
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 258,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					210
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 259,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					150
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 5,
		id: 26,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					140
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					140
				]
			}
		},
		rarityScoreModifier: 50,
		id: 260,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 261,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 262,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 263,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 264,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 265,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 266,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 267,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 268,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 269,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 27,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 270,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 271,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 272,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 273,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 274,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 275,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 276,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 277,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 278,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 279,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 28,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 280,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 281,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 282,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 283,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 284,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 285,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 286,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 287,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 288,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 289,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					112
				]
			}
		},
		rarityScoreModifier: 10,
		id: 29,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 290,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 291,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 292,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 293,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 1,
		id: 294,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 295,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 2,
		id: 296,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 297,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 298,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 2,
		id: 299,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 1,
		id: 3,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6
				]
			}
		},
		rarityScoreModifier: 20,
		id: 30,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 300,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 301,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			}
		},
		rarityScoreModifier: 5,
		id: 302,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 303,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 5,
		id: 304,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					22
				]
			}
		},
		rarityScoreModifier: 10,
		id: 305,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 306,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 307,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 308,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			}
		},
		rarityScoreModifier: 20,
		id: 309,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					30
				]
			}
		},
		rarityScoreModifier: 20,
		id: 31,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			}
		},
		rarityScoreModifier: 20,
		id: 310,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					18
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 20,
		id: 311,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					30
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 20,
		id: 312,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					20.009999999999998
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6.8999999999999995
				]
			}
		},
		rarityScoreModifier: 50,
		id: 313,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					20.009999999999998
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6.8999999999999995
				]
			}
		},
		rarityScoreModifier: 50,
		id: 314,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					13.34
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					9.2
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 50,
		id: 315,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 316,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 317,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 318,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 319,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6
				]
			}
		},
		rarityScoreModifier: 20,
		id: 32,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 320,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 321,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 322,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 323,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 324,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 325,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 326,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 327,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 328,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 329,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					20.009999999999998
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 33,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 330,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 331,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 332,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 333,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 334,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 335,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 336,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 337,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 338,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 339,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					210
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					20.009999999999998
				]
			}
		},
		rarityScoreModifier: 50,
		id: 34,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 340,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 341,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 342,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 343,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 344,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 345,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 346,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 347,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 348,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 349,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					40.019999999999996
				]
			}
		},
		rarityScoreModifier: 50,
		id: 35,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 350,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 351,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 352,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 353,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 354,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 355,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 356,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 5,
		id: 357,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 358,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 359,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 1,
		id: 36,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 10,
		id: 360,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 361,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					8
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					30
				]
			}
		},
		rarityScoreModifier: 20,
		id: 362,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					60
				]
			}
		},
		rarityScoreModifier: 20,
		id: 363,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					180
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					4
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 20,
		id: 364,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					120
				]
			}
		},
		rarityScoreModifier: 20,
		id: 365,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					280
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					70
				]
			}
		},
		rarityScoreModifier: 50,
		id: 366,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6.8999999999999995
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 367,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6.8999999999999995
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		rarityScoreModifier: 50,
		id: 368,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6.8999999999999995
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					105
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 50,
		id: 369,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 37,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 370,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 371,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 372,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3
				]
			}
		},
		rarityScoreModifier: 2,
		id: 373,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 374,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 375,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 376,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3
				]
			}
		},
		rarityScoreModifier: 2,
		id: 377,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					5.1
				]
			}
		},
		rarityScoreModifier: 5,
		id: 378,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					150
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 5,
		id: 379,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 38,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 380,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 381,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 382,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					168
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 383,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					10
				]
			}
		},
		rarityScoreModifier: 20,
		id: 384,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					420
				]
			}
		},
		rarityScoreModifier: 50,
		id: 385,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					280
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					70
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 50,
		id: 386,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					210
				]
			}
		},
		rarityScoreModifier: 50,
		id: 387,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 388,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 389,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 39,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 390,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 391,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 392,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 393,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 394,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 395,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 396,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 397,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 398,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 399,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 4,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 40,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 400,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 401,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 402,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
		},
		rarityScoreModifier: 0,
		id: 403,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 404,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 405,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 406,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 407,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 408,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 409,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 2,
		id: 41,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 410,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					150
				]
			}
		},
		rarityScoreModifier: 5,
		id: 411,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					150
				]
			}
		},
		rarityScoreModifier: 5,
		id: 412,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 413,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			}
		},
		rarityScoreModifier: 10,
		id: 414,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					11
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 415,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					150
				]
			}
		},
		rarityScoreModifier: 20,
		id: 416,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 417,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			}
		},
		rarityScoreModifier: 5,
		id: 42,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 43,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					50
				]
			}
		},
		rarityScoreModifier: 5,
		id: 44,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					84
				]
			}
		},
		rarityScoreModifier: 10,
		id: 45,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 46,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					112
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 10,
		id: 47,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					300
				]
			}
		},
		rarityScoreModifier: 20,
		id: 48,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					30
				]
			}
		},
		rarityScoreModifier: 20,
		id: 49,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 5,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					10
				]
			}
		},
		rarityScoreModifier: 20,
		id: 50,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					150
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 20,
		id: 51,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					210
				]
			}
		},
		rarityScoreModifier: 50,
		id: 52,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					420
				]
			}
		},
		rarityScoreModifier: 50,
		id: 53,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					210
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					20.009999999999998
				]
			}
		},
		rarityScoreModifier: 50,
		id: 54,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 55,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 56,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			}
		},
		rarityScoreModifier: 5,
		id: 57,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 5,
		id: 58,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 59,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					7.5
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 2,
		id: 6,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 60,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		rarityScoreModifier: 10,
		id: 61,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					4
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 62,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					4.6
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					140
				]
			}
		},
		rarityScoreModifier: 50,
		id: 63,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 1,
		id: 64,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					112
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					56
				]
			}
		},
		type: "ranged",
		rarityScoreModifier: 10,
		id: 65,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 66,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					25
				]
			}
		},
		rarityScoreModifier: 1,
		id: 67,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		rarityScoreModifier: 1,
		id: 68,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					2.5
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 1,
		id: 69,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 7,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					18
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					60
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 20,
		id: 70,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.4
				]
			}
		},
		rarityScoreModifier: 5,
		id: 71,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					150
				]
			}
		},
		rarityScoreModifier: 20,
		id: 72,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					30
				]
			}
		},
		rarityScoreModifier: 20,
		id: 73,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					120
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 74,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					300
				]
			}
		},
		rarityScoreModifier: 20,
		id: 75,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			ap: {
				"+": [
					{
						"var": "ap"
					},
					12.5
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 1,
		id: 76,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 77,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 78,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					50
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 5,
		id: 79,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 8,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		rarityScoreModifier: 5,
		id: 80,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					100
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5
				]
			}
		},
		rarityScoreModifier: 5,
		id: 81,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					7.2
				]
			}
		},
		rarityScoreModifier: 10,
		id: 82,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					15
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 5,
		id: 83,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 84,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					16.5
				]
			}
		},
		rarityScoreModifier: 10,
		id: 85,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					12
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					90
				]
			}
		},
		rarityScoreModifier: 20,
		id: 86,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 87,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 88,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 5,
		id: 89,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					50
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					25
				]
			}
		},
		rarityScoreModifier: 5,
		id: 9,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					2
				]
			}
		},
		rarityScoreModifier: 1,
		id: 90,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					3.75
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.5
				]
			}
		},
		rarityScoreModifier: 2,
		id: 91,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			attack: {
				"+": [
					{
						"var": "attack"
					},
					10
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					1.7
				]
			}
		},
		rarityScoreModifier: 5,
		id: 92,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					7.2
				]
			}
		},
		type: "shield",
		rarityScoreModifier: 10,
		id: 93,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 94,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					37.5
				]
			},
			ap: {
				"+": [
					{
						"var": "ap"
					},
					18.75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 95,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					75
				]
			}
		},
		rarityScoreModifier: 2,
		id: 96,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 97,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					56
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					5.5
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					3.6
				]
			}
		},
		rarityScoreModifier: 10,
		id: 98,
		traitsModifiers: [
		]
	},
	{
		gameTraitsModifiers: {
			hp: {
				"+": [
					{
						"var": "hp"
					},
					60
				]
			},
			attack: {
				"+": [
					{
						"var": "attack"
					},
					6
				]
			},
			critPercent: {
				"+": [
					{
						"var": "critPercent"
					},
					6
				]
			}
		},
		type: "melee",
		rarityScoreModifier: 20,
		id: 99,
		traitsModifiers: [
		]
	}
];

function createDroptGotchi(gotchi) {
    const droptGotchi = createEmptyDroptGotchi(gotchi);
    droptGotchi.traits.hp = evaluateTrait(gotchi.traits, "hp", hp);
    droptGotchi.traits.attack = evaluateTrait(gotchi.traits, "attack", attack);
    droptGotchi.traits.critPercent = evaluateTrait(gotchi.traits, "crit", crit);
    droptGotchi.traits.ap = evaluateTrait(gotchi.traits, "ap", ap);
    droptGotchi.traits.doubleStrikeChance = evaluateTrait(gotchi.traits, "doubleStrikeChance", doubleStrikeChance);
    droptGotchi.traits.critDamageIncrease = evaluateTrait(gotchi.traits, "critDamageIncrease", critDamageIncrease);
    const data = wearables;
    for (const wearableId of gotchi.wearables) {
        const wearable = data.find((w) => w.id === wearableId);
        if (wearable) {
            if (wearable.gameTraitsModifiers.hp) {
                droptGotchi.traits.hp = evaluateTrait(droptGotchi.traits, "hp", wearable.gameTraitsModifiers.hp);
            }
            if (wearable.gameTraitsModifiers.attack) {
                droptGotchi.traits.attack = evaluateTrait(droptGotchi.traits, "attack", wearable.gameTraitsModifiers.attack);
            }
            if (wearable.gameTraitsModifiers.critPercent) {
                droptGotchi.traits.critPercent = evaluateTrait(droptGotchi.traits, "crit", wearable.gameTraitsModifiers.critPercent);
            }
            if (wearable.gameTraitsModifiers.ap) {
                droptGotchi.traits.ap = evaluateTrait(droptGotchi.traits, "ap", wearable.gameTraitsModifiers.ap);
            }
            if (wearable.gameTraitsModifiers.increasedAttackRange) {
                droptGotchi.traits.increasedAttackRange = evaluateTrait(droptGotchi.traits, "increasedAttackRange", wearable.gameTraitsModifiers.increasedAttackRange);
            }
            if (wearable.gameTraitsModifiers.doubleStrikeChance) {
                droptGotchi.traits.doubleStrikeChance = evaluateTrait(droptGotchi.traits, "doubleStrikeChance", wearable.gameTraitsModifiers.doubleStrikeChance);
            }
            /*
            Those traits are not implemented in the game yet
            */
            // if (wearable.gameTraitsModifiers.evasion) {
            //   droptGotchi.traits.evasion = evaluateTrait(droptGotchi.traits, "evasion", wearable.gameTraitsModifiers.evasion);
            // }
            // if (wearable.gameTraitsModifiers.apRegen) {
            //   droptGotchi.traits.apRegen = evaluateTrait(droptGotchi.traits, "apRegen", wearable.gameTraitsModifiers.apRegen);
            // }
            // if (wearable.gameTraitsModifiers.rangedDamage) {
            //   droptGotchi.traits.rangedDamage = evaluateTrait(droptGotchi.traits, "rangedDamage", wearable.gameTraitsModifiers.rangedDamage);
            // }
            // if (wearable.gameTraitsModifiers.critDamageIncrease) {
            //   droptGotchi.traits.critDamageIncrease = evaluateTrait(droptGotchi.traits, "critDamageIncrease", wearable.gameTraitsModifiers.critDamageIncrease);
            // }
            // if (wearable.gameTraitsModifiers.specialEffect) {
            //   droptGotchi.traits.specialEffect = evaluateTrait(droptGotchi.traits, "specialEffect", wearable.gameTraitsModifiers.specialEffect);
            // }
            // if (wearable.gameTraitsModifiers.debuffEffectiveness) {
            //   droptGotchi.traits.debuffEffectiveness = evaluateTrait(droptGotchi.traits, "debuffEffectiveness", wearable.gameTraitsModifiers.debuffEffectiveness);
            // }
            // if (wearable.gameTraitsModifiers.specialCooldownReduction) {
            //   droptGotchi.traits.specialCooldownReduction = evaluateTrait(droptGotchi.traits, "specialCooldownReduction", wearable.gameTraitsModifiers.specialCooldownReduction);
            // }
            // if (wearable.gameTraitsModifiers.piercing) {
            //   droptGotchi.traits.piercing = evaluateTrait(droptGotchi.traits, "piercing", wearable.gameTraitsModifiers.piercing);
            // }
            // if (wearable.gameTraitsModifiers.specialCostReduction) {
            //   droptGotchi.traits.specialCostReduction = evaluateTrait(droptGotchi.traits, "specialCostReduction", wearable.gameTraitsModifiers.specialCostReduction);
            // }
            // if (wearable.gameTraitsModifiers.armour) {
            //   droptGotchi.traits.armour = evaluateTrait(droptGotchi.traits, "armour", wearable.gameTraitsModifiers.armour);
            // }
            // if (wearable.gameTraitsModifiers.reduceMeleeDamage) {
            //   droptGotchi.traits.reduceMeleeDamage = evaluateTrait(droptGotchi.traits, "reduceMeleeDamage", wearable.gameTraitsModifiers.reduceMeleeDamage);
            // }
            // if (wearable.gameTraitsModifiers.reduceMagicalDamage) {
            //   droptGotchi.traits.reduceMagicalDamage = evaluateTrait(droptGotchi.traits, "reduceMagicalDamage", wearable.gameTraitsModifiers.reduceMagicalDamage);
            // }
            // if (wearable.gameTraitsModifiers.reduceElementalDamage) {
            //   droptGotchi.traits.reduceElementalDamage = evaluateTrait(droptGotchi.traits, "reduceElementalDamage", wearable.gameTraitsModifiers.reduceElementalDamage);
            // }
            // if (wearable.gameTraitsModifiers.apLeech) {
            //   droptGotchi.traits.apLeech = evaluateTrait(droptGotchi.traits, "apLeech", wearable.gameTraitsModifiers.apLeech);
            // }
            // if (wearable.gameTraitsModifiers.hpLeech) {
            //   droptGotchi.traits.hpLeech = evaluateTrait(droptGotchi.traits, "hpLeech", wearable.gameTraitsModifiers.hpLeech);
            // }
            // if (wearable.gameTraitsModifiers.essenceLeech) {
            //   droptGotchi.traits.essenceLeech = evaluateTrait(droptGotchi.traits, "essenceLeech", wearable.gameTraitsModifiers.essenceLeech);
            // }
            // if (wearable.gameTraitsModifiers.moveSpeed) {
            //   droptGotchi.traits.moveSpeed = evaluateTrait(droptGotchi.traits, "moveSpeed", wearable.gameTraitsModifiers.moveSpeed);
            // }
            // if (wearable.gameTraitsModifiers.magnetism) {
            //   droptGotchi.traits.magnetism = evaluateTrait(droptGotchi.traits, "magnetism", wearable.gameTraitsModifiers.magnetism);
            // }
            // if (wearable.gameTraitsModifiers.extraDash) {
            //   droptGotchi.traits.extraDash = evaluateTrait(droptGotchi.traits, "extraDash", wearable.gameTraitsModifiers.extraDash);
            // }
            // if (wearable.gameTraitsModifiers.purveying) {
            //   droptGotchi.traits.purveying = evaluateTrait(droptGotchi.traits, "purveying", wearable.gameTraitsModifiers.purveying);
            // }
        }
    }
    return droptGotchi;
}
function createEmptyDroptGotchi(gotchi) {
    return {
        id: gotchi.id,
        traits: {
            hp: 0,
            attack: 0,
            critPercent: 0,
            ap: 0,
            evasion: 0,
            apRegen: 0,
            rangedDamage: 0,
            critDamageIncrease: 0,
            specialEffect: 0,
            debuffEffectiveness: 0,
            specialCooldownReduction: 0,
            piercing: 0,
            specialCostReduction: 0,
            increasedAttackRange: 0,
            doubleStrikeChance: 0,
            armour: 0,
            reduceMeleeDamage: 0,
            reduceMagicalDamage: 0,
            reduceElementalDamage: 0,
            apLeech: 0,
            hpLeech: 0,
            essenceLeech: 0,
            moveSpeed: 1,
            magnetism: 0,
            extraDash: 0,
            purveying: 0,
        },
    };
}

export { createBattlerGotchi, createDroptGotchi };
