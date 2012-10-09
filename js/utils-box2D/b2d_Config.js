/**
 * MUST BE DEFINED BEFORE ANYTHING
 */
CANVAS_ID = 'canvas';

/**
 * CANVAS ELEMENT & USEFULL VARIABLES
 */
var canvasElem = document.getElementById(CANVAS_ID),
world,
fixDef,
bodyDef,
/**
 * CONSTANTES DEFINITIONS FILE 
 */
SCALE = 30,
FRAME_RATE = 1 / 60,
VELOCITY_ITERATIONS = 10,
POSITION_ITERATIONS = 10,
CANVAS_WIDTH = canvasElem.width,
CANVAS_HEIGHT = canvasElem.height,
CTX = canvasElem.getContext("2d"),

/**
 * VARIABLE TO USE LESS BOX2D VERBOSE 
 */
b2Vec2 = Box2D.Common.Math.b2Vec2,
b2AABB = Box2D.Collision.b2AABB,
b2BodyDef = Box2D.Dynamics.b2BodyDef,
b2Body = Box2D.Dynamics.b2Body,
b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
b2Fixture = Box2D.Dynamics.b2Fixture,
b2World = Box2D.Dynamics.b2World,
b2MassData = Box2D.Collision.Shapes.b2MassData,
b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
b2DebugDraw = Box2D.Dynamics.b2DebugDraw,
b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;